# Diwata Yoga — Functional Improvement Roadmap
### Version 2.0 Planning Document · Innovator Crews · 2026

> **Scope:** All improvements listed here are achievable with zero backend, zero server cost, and zero new paid dependencies.
> The entire site remains static HTML/CSS/JS deployed on Vercel.
> Each phase can be implemented independently in any order.

---

## Table of Contents

1. [Current State Audit](#current-state-audit)
2. [Phase 1 — Foundation Fixes (Quick Wins)](#phase-1--foundation-fixes-quick-wins)
3. [Phase 2 — Content Depth](#phase-2--content-depth)
4. [Phase 3 — Interactivity & Personalization](#phase-3--interactivity--personalization)
5. [Phase 4 — Signature Features](#phase-4--signature-features)
6. [Phase 5 — App-Level Polish](#phase-5--app-level-polish)
7. [Implementation Notes](#implementation-notes)
8. [File Change Map](#file-change-map)

---

## Current State Audit

### What Exists

| Area | Current Implementation | Limitation |
|---|---|---|
| Pose data | `assets/data/poses.xml` — 18 poses | Only 5 fields per pose: name, description, benefits, difficulty, image |
| Search | `search.html` + JS string match against XML | Can only match by name/description text, no tag or category awareness |
| Filter | CSS class-based filter in `main.js` (`setupFilterButtons`) | Only one axis: Easy / Intermediate / Hard |
| Videos | 12 YouTube embeds hardcoded in `information.html` | Static, no filtering by goal or duration inside the video section |
| Gallery | Static images, CSS class filter | 4 categories, no lightbox, no captions on mobile |
| Articles | 4 cards linking to external `ekhartyoga.com` | No fallback if external links break; no internal content |
| Contact | EmailJS via `emailfunc.js` | Works correctly; public key exposed (acceptable for EmailJS design) |
| Navigation | Sticky nav, hamburger mobile menu | No active-page indicator beyond a static `.active` class per page |
| Animations | Intersection Observer + CSS classes | Solid; already well-implemented |
| Storage | Nothing is persisted | Every visit starts with zero memory of the user |
| SEO | No `<meta description>`, no Open Graph, no structured data | Links shared on social show no preview card |
| Theming | Single light theme, hardcoded | No dark mode, no system preference detection |
| Accessibility | Basic `alt` attributes, one `aria-label` on nav toggle | No skip-link, no ARIA roles on dynamic content, no focus trap in mobile menu |
| PWA | No service worker, no manifest | Site requires internet; cannot be installed to home screen |

### CSS Architecture (Strength to Build On)

The global stylesheet uses CSS custom properties for everything:

```css
--color-primary: #2D5F5D;
--color-primary-light: #3A7A77;
--color-primary-dark: #1F4544;
--color-accent: #C9A978;
--color-background: #F8F9FA;
--color-surface: #FFFFFF;
--color-text-primary: #2C3E50;
--color-text-secondary: #5A6C7D;
```

This architecture makes dark mode a single CSS block — no framework required.

### JS Architecture (Strength to Build On)

The existing `setupFilterButtons()` function already handles:
- Active button toggling
- DOM show/hide based on class matching
- Re-triggering of scroll animations after filter

This same function can accept multi-axis filters (difficulty AND category) with minimal changes.

---

## Phase 1 — Foundation Fixes (Quick Wins)

> **Effort:** Low · **Impact:** High · **Timeline:** 1–2 days total

---

### 1.1 Dark Mode / Night Practice Mode

**Why now:**
A large share of yoga practice happens at dawn and in the evening. A bright white screen at 6am or 10pm directly contradicts the calming experience the site aims to create. Dark mode became an expected standard (not a bonus feature) in 2023 onward — users notice its absence.

**2024–2026 Trend Connection:**
Evening yin yoga, restorative sessions, and sleep yoga are among the fastest-growing practice styles. These happen at night. A dark UI is part of that ritual.

**Technical Approach:**

1. Add a `[data-theme="dark"]` selector to `global.css` that overrides all CSS variables:

```css
[data-theme="dark"] {
    --color-background: #0D2B2A;
    --color-surface:    #122E2D;
    --color-primary:    #3A7A77;
    --color-text-primary:   #E8E0D5;
    --color-text-secondary: #A8B8B7;
    --color-border:     #1E4342;
}
```

2. Add a toggle button (moon/sun icon SVG) to the `<nav>` in all 5 HTML files, beside the hamburger.

3. In `main.js`, add a theme toggle handler:

```js
// On toggle click
const saved = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', saved);

toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});
```

4. On every page load, read `localStorage` and apply the saved theme before the first paint (prevents flash).

**Files changed:** `css/global.css`, `js/main.js`, all 5 HTML files (nav section only)

**Color palette for dark mode (yoga-themed):**
- Background: Deep forest teal `#0D2B2A` — like a candlelit yoga studio
- Surface: `#122E2D` — slightly lighter for cards
- Headings: Warm parchment `#E8E0D5` — matches the gold/earth tone brand
- Accent gold: unchanged `#C9A978` — glows beautifully on dark backgrounds

---

### 1.2 SEO — Open Graph + Meta Descriptions + Structured Data

**Why now:**
Currently, sharing any Diwata Yoga page link on Facebook, Instagram Stories, iMessage, or Discord shows a blank card with no image and no description. This is fixed in under an hour with pure HTML.

**Technical Approach:**

**Per-page meta tags** (add to each `<head>`):

```html
<!-- index.html -->
<meta name="description" content="Diwata Yoga — a free online yoga platform with pose libraries, video tutorials, and breathwork guides for all levels.">
<meta property="og:title" content="Diwata Yoga — Collect. Breathe. Transform.">
<meta property="og:description" content="Free yoga for everyone. Explore poses, guided videos, and philosophy — no account required.">
<meta property="og:image" content="https://diwatayoga.vercel.app/assets/images/logo_diwata_yoga.png">
<meta property="og:url" content="https://diwatayoga.vercel.app/">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

**Structured data for poses** (add as `<script type="application/ld+json">` to `information.html`):

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Yoga Poses",
  "itemListElement": [
    {
      "@type": "ExerciseAction",
      "name": "Mountain Pose",
      "alternateName": "Tadasana",
      "description": "Foundational pose...",
      "url": "https://diwatayoga.vercel.app/information.html"
    }
  ]
}
```

This makes Diwata Yoga eligible to appear in Google's exercise rich results.

**Files changed:** All 5 HTML files (`<head>` only)

---

### 1.3 Accessibility Baseline

**Why now:**
Yoga is for everyone — including users with visual impairments or motor limitations. Beyond ethics, Google's Lighthouse accessibility score directly affects SEO ranking.

**What to add:**

- **Skip navigation link** — `<a class="skip-link" href="#main-content">Skip to content</a>` at the top of every page body (visually hidden, visible on focus). One CSS rule + one HTML line per page.
- **Focus trap in mobile menu** — when the hamburger menu is open, Tab should not leave the menu overlay. 10 lines of JS in `main.js`.
- **`aria-expanded`** on the hamburger button — toggled by JS to announce open/closed state to screen readers.
- **`role="main"` and `id="main-content"`** on every `<main>` tag.
- **`aria-label`** on every icon-only button (scroll-to-top button, dark mode toggle).

**Files changed:** `js/main.js`, `css/global.css`, all 5 HTML files (small additions)

---

## Phase 2 — Content Depth

> **Effort:** Low-Medium · **Impact:** High · **Timeline:** 2–3 days

---

### 2.1 Expand `poses.xml` — Richer Data Per Pose

**Why:**
The search, the filter system, the future practice builder, and the breathwork cues are all only as good as the underlying data. Adding fields now unlocks every Phase 3 and Phase 4 feature without revisiting the data layer.

**New fields to add to every pose entry:**

```xml
<pose>
    <name>Mountain Pose</name>
    <sanskrit>Tadasana</sanskrit>                          <!-- NEW -->
    <description>...</description>
    <benefits>...</benefits>
    <breath_cue>Inhale to lengthen. Exhale to root.</breath_cue>   <!-- NEW -->
    <difficulty>Easy</difficulty>
    <duration_seconds>30</duration_seconds>                <!-- NEW -->
    <focus>balance strength</focus>                        <!-- NEW: space-separated tags -->
    <purpose>calming grounding</purpose>                   <!-- NEW: space-separated tags -->
    <contraindications>None</contraindications>            <!-- NEW -->
    <image>position_mountain_pose.webp</image>
</pose>
```

**Field definitions:**

| Field | Values | Used by |
|---|---|---|
| `sanskrit` | Sanskrit name string | Pose detail cards, search |
| `breath_cue` | One sentence inhale/exhale instruction | Practice sequence builder, pose cards |
| `duration_seconds` | 15–90 | Practice sequence builder timer |
| `focus` | `balance`, `strength`, `flexibility`, `core`, `hips`, `back`, `shoulders`, `legs` | New category filter |
| `purpose` | `energizing`, `calming`, `stretching`, `restorative`, `grounding` | New category filter |
| `contraindications` | Plain text string | Responsible wellness display on pose detail |

**Number of poses to expand:** All 18 existing poses + add 10–15 more to reach a library of ~30 poses, covering:
- All common Hatha poses
- Key Yin poses (Dragon, Butterfly, Sleeping Swan)
- A few Vinyasa transitions (Chaturanga, Upward Dog)

**Files changed:** `assets/data/poses.xml` only

---

### 2.2 Pose Category Filter — Multi-Axis Filtering

**Why:**
"Intermediate" tells you difficulty. It does not tell you whether the pose will help your tight hips, ease your lower back, or energize you before work. The 2024–2026 yoga audience thinks in terms of goals and body parts, not difficulty labels.

**New filter axes:**

```
DIFFICULTY:  [ All ]  [ Easy ]  [ Intermediate ]  [ Hard ]
FOCUS:       [ All ]  [ Core ]  [ Hips ]  [ Back ]  [ Balance ]  [ Strength ]
PURPOSE:     [ All ]  [ Energizing ]  [ Calming ]  [ Restorative ]
```

**Technical Approach:**

The existing `setupFilterButtons()` in `main.js` applies a single filter. Extend it to support multiple active filters simultaneously:

```js
function setupMultiFilter(containerSelector, itemSelector) {
    const activeFilters = { difficulty: 'all', focus: 'all', purpose: 'all' };

    document.querySelectorAll(containerSelector + ' .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const axis = this.dataset.axis;     // 'difficulty' | 'focus' | 'purpose'
            const filter = this.dataset.filter;
            activeFilters[axis] = filter;

            // Update active state per axis group only
            document.querySelectorAll(`[data-axis="${axis}"]`)
                .forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Apply all active filters
            document.querySelectorAll(itemSelector).forEach(item => {
                const matchDiff = activeFilters.difficulty === 'all' || item.classList.contains(activeFilters.difficulty);
                const matchFocus = activeFilters.focus === 'all' || item.dataset.focus?.includes(activeFilters.focus);
                const matchPurpose = activeFilters.purpose === 'all' || item.dataset.purpose?.includes(activeFilters.purpose);
                item.style.display = (matchDiff && matchFocus && matchPurpose) ? '' : 'none';
            });
        });
    });
}
```

Each pose card in `information.html` gets `data-focus` and `data-purpose` attributes populated from the XML during the JS render pass.

**Files changed:** `js/main.js`, `information.html` (filter button HTML), `css/information.css` (filter row styling)

---

### 2.3 Upgraded Search — Tags, Sanskrit, and Fuzzy Match

**Current search:** Plain string `.includes()` match against `name` and `description`.

**Problems:**
- Searching "Tadasana" returns nothing (Mountain Pose's Sanskrit name)
- Searching "hip" returns nothing (no body-focus tags in current data)
- Typos return nothing ("mountian" finds nothing)
- No visual distinction between a name match vs. a description match

**Upgrades:**

1. **Sanskrit search** — include `<sanskrit>` in the search index once data is expanded (Phase 2.1)
2. **Tag search** — include `<focus>` and `<purpose>` fields so "calming" or "hip stretch" returns relevant poses
3. **Fuzzy match** — replace `.includes()` with a simple Levenshtein distance check (< 2 character edit distance). No library needed — it's 15 lines of JS.
4. **Result ranking** — name matches rank above description matches, which rank above tag matches. Show a small label ("Matched: Sanskrit name") on the result card.
5. **No-results suggestion** — if 0 results, suggest the closest pose name instead of a blank screen.

**Files changed:** `search.html` (result card template), `js/main.js` or a new `js/search.js`

---

## Phase 3 — Interactivity & Personalization

> **Effort:** Medium · **Impact:** Very High · **Timeline:** 3–5 days

---

### 3.1 Pose Favorites / My Practice Bookmarks

**Why:**
Every visit to the site currently starts blank. There is no memory of what poses you've explored, saved, or practiced. A bookmarks system using `localStorage` adds personalization with zero backend.

**2024–2026 Trend Connection:**
Personalization is the defining UX expectation of this era. Even a simple "save for later" feature makes the site feel like a tool, not just a reference page.

**Implementation Detail:**

**Data structure in `localStorage`:**
```json
{
  "diwata_favorites": ["Mountain Pose", "Downward Dog", "Tree Pose"]
}
```

**UI changes:**
- Heart icon (SVG, outlined by default) on every pose card in Information and every result card in Search
- On click: fill the heart, add pose name to `localStorage` array, show micro-animation (pulse + green fill)
- On repeat click: unfill the heart, remove from array
- On page load: read `localStorage` and fill hearts for already-saved poses

**"My Saved Poses" section:**
- Add a collapsible "My Saved Poses" panel at the top of `search.html`
- If `localStorage` has saved poses, render them as cards in this panel
- If empty, show: "Tap the ♡ on any pose to save it here"
- A "Clear all" button

**Files changed:** `js/main.js` (heart toggle logic + localStorage read/write), `information.html` (heart icon per pose card), `search.html` (saved poses panel + heart icons on results), `css/information.css`, `css/search.css`

---

### 3.2 "Find Your Level" Quiz

**Why:**
The single biggest friction point for a new visitor to a yoga content site is: *"I don't know where to start."* Without guidance, beginners bounce. A 3-question quiz that takes 20 seconds and then says "Start here" converts browsers into practitioners.

**2024–2026 Trend Connection:**
Personalized onboarding is standard in every wellness app (Peloton, Calm, Down Dog). A quiz is the lightest possible version of this — no account, no data stored beyond the session.

**Quiz flow:**

```
Q1: How long have you been practicing yoga?
    [ Never tried it ]  [ A few months ]  [ 1+ years ]

Q2: What is your main goal today?
    [ Relieve stress & calm down ]  [ Build flexibility ]
    [ Strengthen my body ]  [ Improve balance ]

Q3: How much time do you have?
    [ 10–15 minutes ]  [ 30 minutes ]  [ 60 minutes ]
```

**Result mapping (pure JS decision tree):**

| Q1 | Q2 | Q3 | Result |
|---|---|---|---|
| Never | Any | Any | "Start Here" → 5 Easy poses + Beginners video playlist |
| Few months | Calm | Any | "Restorative Flow" → Yin/calming poses + Yin video |
| Few months | Strength | Short | "Power Core" → Plank, Warrior, Bridge |
| 1+ years | Any | Long | "Full Practice" → All difficulties, advanced video |
| Any | Flexibility | Any | "Deep Stretch" → Hip/hamstring poses |

**Where it lives:**
- A modal overlay triggered by a "Not sure where to start? →" button on the home page hero section
- Can also live as a standalone section on `information.html`

**Files changed:** `js/main.js` (quiz logic + result routing), `index.html` (trigger button), `css/home.css` (modal styling)

---

## Phase 4 — Signature Features

> **Effort:** Medium-High · **Impact:** Very High · **Timeline:** 1–2 weeks

---

### 4.1 Breathwork Timer (Pranayama Guide)

**Why this is the #1 priority feature:**
Breathwork (Pranayama) overtook traditional seated meditation as the fastest-growing wellness practice from 2023 to 2026. Apps built entirely around breathing (Othership, Wim Hof, Breathwrk) reached millions of users. For a yoga platform, offering a built-in breathing guide is the single most authentic feature addition possible — breathing is literally part of every yoga class.

**2024–2026 Trend Connection:**
- Pranayama as standalone practice (not just warmup) is mainstream
- "Nervous system regulation" through breathwork is clinically validated and widely searched
- Box breathing is used by athletes, therapists, and corporate wellness programs
- 432 Hz / 528 Hz "healing frequencies" are a social media phenomenon in yoga communities

**Techniques to include:**

| Technique | Pattern | Use case |
|---|---|---|
| **Box Breathing** | 4s in · 4s hold · 4s out · 4s hold | Stress relief, focus, calm |
| **4-7-8 Breathing** | 4s in · 7s hold · 8s out | Sleep prep, deep relaxation |
| **Nadi Shodhana** | Alternating nostril guide text | Classical Pranayama, balance |
| **Kapalbhati** | Rapid 1s exhale bursts · passive inhale | Energizing, morning practice |
| **Bhramari (Humming Bee)** | 4s in · 8s hum exhale | Anxiety, headache relief |

**UI Design:**

```
┌────────────────────────────────────────────┐
│                                            │
│         [ Technique selector tabs ]        │
│                                            │
│              ◯  ←  animated circle        │
│          (expands on inhale,              │
│           shrinks on exhale)              │
│                                            │
│              INHALE  →  4s                 │
│          [ ████████████░░░░ ]  timer bar  │
│                                            │
│      Duration: [ 3 min ] [ 5 min ] [ 10 min ] │
│                                            │
│         [ Start Practice ]  [ Stop ]       │
│                                            │
└────────────────────────────────────────────┘
```

**Technical Implementation:**

```js
const techniques = {
    box: { phases: ['Inhale', 'Hold', 'Exhale', 'Hold'], durations: [4, 4, 4, 4] },
    '478': { phases: ['Inhale', 'Hold', 'Exhale'], durations: [4, 7, 8] },
    // ...
};

let phaseIndex = 0;
let secondsLeft = 0;
let totalSeconds = 0;
let sessionInterval = null;

function startBreathwork(techniqueKey, totalMinutes) {
    const tech = techniques[techniqueKey];
    totalSeconds = totalMinutes * 60;
    phaseIndex = 0;
    secondsLeft = tech.durations[0];
    sessionInterval = setInterval(tick, 1000);
}

function tick() {
    // Count down current phase
    // On phase end, advance to next phase
    // Animate circle with CSS custom property --breath-scale
    // Update label text
    // On totalSeconds = 0, end session, show completion screen
}
```

The breathing circle animation uses CSS:
```css
.breath-circle {
    transform: scale(var(--breath-scale, 1));
    transition: transform var(--phase-duration, 4s) ease-in-out;
    background: radial-gradient(circle, var(--color-primary-light), var(--color-primary-dark));
}
```

**Where it lives:** New page `breathwork.html` + nav link, OR a dedicated full-section on `information.html` (recommended — keeps the nav clean).

**Files changed:** New `breathwork.html`, `css/global.css` (circle animation), `js/main.js` (breathwork state machine), `css/global.css` (nav addition)

---

### 4.2 Guided Practice Sequence Builder

**Why:**
This is the feature that separates a *reference site* from a *practice tool*. Every premium yoga app (Down Dog, Glo, Alo Moves) is built around sequence building. A simplified version — using the existing pose library and a timer — gives Diwata Yoga a genuinely unique, app-like feature.

**2024–2026 Trend Connection:**
- "Customizable yoga flows" is a top App Store search term in the Health & Fitness category
- Users increasingly want to build their own 10-minute micro-sessions (short practice trend)
- Somatic yoga practitioners need to sequence specific body-focus poses (Hip Day, Back Day, etc.)

**Feature Flow:**

```
STEP 1 — Build Your Sequence
─────────────────────────────
[ All poses shown as small cards ]
[ Click a pose to add it to your sequence ]
[ Sequence appears as a horizontal strip at the bottom ]
[ Drag to reorder (optional), set hold time per pose ]
[ "Start Practice" button ]

STEP 2 — Practice Mode (Full Screen)
─────────────────────────────────────
[ Current pose: large image ]
[ Pose name (English + Sanskrit) ]
[ Breathing cue: "Inhale to lengthen. Exhale to root." ]
[ Hold duration countdown ring ]
[ Next pose preview ]
[ Pause / Skip / End buttons ]

STEP 3 — Session Complete
──────────────────────────
[ "Great practice!" ]
[ Summary: X poses · Y minutes · Difficulty mix ]
[ Save to localStorage? → persists as a named routine ]
[ Share (copy URL with poses as query params) ]
```

**Technical Implementation:**

Sequence state:
```js
let sequence = []; // Array of pose name strings

function addToSequence(poseName) {
    if (!sequence.includes(poseName)) {
        sequence.push(poseName);
        renderSequenceStrip();
    }
}
```

Practice mode uses `setInterval` for the countdown and reads pose data (image, sanskrit, breath_cue) from the already-parsed XML object in memory.

Shareable URL:
```
diwatayoga.vercel.app/information.html?seq=Mountain+Pose,Downward+Dog,Warrior+II
```

On page load, if `?seq=` is in the URL, auto-populate the sequence builder.

**Files changed:** `information.html` (sequence builder UI section), `js/main.js` (sequence state + practice mode), `css/information.css` (practice mode full-screen overlay)

---

## Phase 5 — App-Level Polish

> **Effort:** Medium · **Impact:** High · **Timeline:** 2–4 days

---

### 5.1 Progressive Web App (PWA) — Offline Practice

**Why:**
Yoga is practiced outdoors, in studios, on flights, and in rooms with poor WiFi. A PWA caches the entire site after the first load so it works completely offline. It also adds an "Install App" prompt on mobile — the site appears as a home screen icon with no browser chrome.

**2024–2026 Trend Connection:**
PWAs are now indistinguishable from native apps on iOS 16.4+ and Android. For a wellness tool that people use as a daily ritual, installability is table-stakes.

**Files to create:**

`manifest.json` (root):
```json
{
  "name": "Diwata Yoga",
  "short_name": "Diwata",
  "description": "Free yoga for everyone.",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#F8F9FA",
  "theme_color": "#2D5F5D",
  "icons": [
    { "src": "assets/images/logo_diwata_yoga.png", "sizes": "192x192", "type": "image/png" },
    { "src": "assets/images/logo_diwata_yoga.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

`sw.js` (root — service worker):
```js
const CACHE_NAME = 'diwata-yoga-v1';
const STATIC_ASSETS = [
    '/', '/index.html', '/information.html', '/search.html',
    '/gallery.html', '/aboutus.html', '/breathwork.html',
    '/css/global.css', '/css/home.css', '/css/information.css',
    '/css/search.css', '/css/gallery.css', '/css/aboutus.css',
    '/js/main.js', '/js/emailfunc.js',
    '/assets/data/poses.xml',
    '/assets/images/logo_diwata_yoga.png'
    // pose images added here
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});
```

Register in all HTML files:
```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
</script>
```

**Files changed:** New `manifest.json`, new `sw.js`, `<head>` of all HTML files (manifest link + SW registration)

---

### 5.2 Ambient Sound Player (WebAudio API)

**Why:**
Sound healing combined with yoga is a top 2025 wellness trend. Singing bowls, binaural beats, and ambient soundscapes are played in virtually every modern in-person yoga class. A built-in ambient sound toggle — requiring zero audio file hosting — would make the practice experience on the site genuinely immersive.

**Why WebAudio API instead of audio files:**
Audio files (MP3/WAV) are large (2–10 MB each), slow to load, and cost hosting bandwidth. The WebAudio API can synthesize tones, drones, and rhythmic patterns entirely in JavaScript with zero file size.

**What can be generated without files:**

| Sound | How | Notes |
|---|---|---|
| Singing bowl / Om drone | `OscillatorNode` at 136.1 Hz (C#) with slow vibrato | 136.1 Hz is the "Om" frequency per Vedic tradition |
| Binaural beat (432 Hz) | Two `OscillatorNode`s: left ear 432 Hz, right ear 440 Hz | Requires stereo panning via `StereoPannerNode` |
| Soft bell at phase changes | Short `OscillatorNode` burst with exponential decay | Used in Breathwork Timer to mark phase transitions |

**UI:**
- A small floating button (🔔 / 🔇) fixed to the bottom-left of the screen
- Expands to show: [Bowl Drone] [Binaural 432Hz] [Silent] + volume slider
- Only active on the practice/information pages, not gallery or about us

**Files changed:** New JS module `js/audio.js`, `css/global.css` (floating player button), `information.html`, `breathwork.html` (include script)

---

### 5.3 Gallery Lightbox

**Why:**
Currently clicking a gallery image does nothing. In 2025, users expect to click an image and see it full-screen with a caption and navigation arrows. This is a 3-hour implementation with zero dependencies.

**Implementation:**
- On click of any `.gallery-item`, create a `<div class="lightbox">` overlay dynamically
- Show the full-resolution image, pose name as caption
- Left/right arrow keys and buttons to navigate between filtered gallery items
- Click outside or press `Esc` to close
- Focus trap while open (accessibility)

**Files changed:** `js/main.js` (lightbox logic), `css/gallery.css` (lightbox overlay CSS)

---

## Implementation Notes

### No Backend, Ever

Every feature in this roadmap is intentionally constrained to static files. The reasons:

1. **Vercel free tier** — static sites have unlimited bandwidth; serverless functions have usage limits
2. **Simplicity** — no Express, no Node, no database migrations, no environment variables to manage
3. **Reliability** — a static file never has a runtime error, a cold start, or a timeout
4. **Portability** — the site can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or any CDN without changes

### localStorage Strategy

All user data (dark mode preference, saved poses, quiz result, last sequence) is stored in `localStorage` under namespaced keys:

| Key | Value | Feature |
|---|---|---|
| `diwata_theme` | `"light"` or `"dark"` | Dark Mode |
| `diwata_favorites` | JSON array of pose names | Bookmarks |
| `diwata_last_quiz` | JSON object of answers + result | Quiz |
| `diwata_sequences` | JSON array of named sequences | Sequence Builder |

### Backward Compatibility

All new features degrade gracefully:
- Dark mode: if localStorage is unavailable (private browsing), default to light
- Bookmarks: if localStorage is full, show an error toast instead of throwing
- PWA: if service worker is unsupported (old browsers), the site works exactly as before
- WebAudio: if AudioContext is blocked (browser policy), the sound button is hidden

---

## File Change Map

| File | Phases that touch it | Nature of change |
|---|---|---|
| `css/global.css` | 1.1, 1.3, 4.1, 5.2 | Add dark mode variables, skip link, animation classes |
| `js/main.js` | 1.1, 1.3, 2.2, 2.3, 3.1, 3.2, 4.2, 5.3 | Add theme toggle, multi-filter, search upgrade, bookmarks, quiz, sequence builder, lightbox |
| `assets/data/poses.xml` | 2.1 | Add 6 new fields per pose + 10–15 new poses |
| `information.html` | 2.2, 3.2, 4.2 | Filter button HTML, sequence builder section |
| `search.html` | 2.3, 3.1 | Saved poses panel, heart icons |
| `gallery.html` | 5.3 | No HTML changes; lightbox is fully JS-injected |
| `index.html` | 1.2, 3.2 | SEO meta tags, quiz trigger button |
| `aboutus.html` | 1.2 | SEO meta tags only |
| `breathwork.html` | 4.1 | **New file** |
| `css/breathwork.css` | 4.1 | **New file** |
| `js/audio.js` | 5.2 | **New file** |
| `manifest.json` | 5.1 | **New file** |
| `sw.js` | 5.1 | **New file** |

---

*Roadmap authored by Innovator Crews · Diwata Yoga v2.0 · 2026*
*Marc Parubrub · Veeny Bautista · Leander Ochea · Armabel Ramos*
