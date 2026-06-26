# Diwata Yoga
### A free, immersive online yoga platform for practitioners of all levels — from first breath to advanced flow.

![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS-orange?style=flat-square)

---

## 📦 Portfolio Data Block

> **For automated import.** This YAML block is the single source of truth my portfolio site reads to render the Diwata Yoga project page. It is intentionally machine-parseable — keep keys stable; edit values freely. Everything below it in this README is the human-readable expansion of these same fields.

```yaml
# === DIWATA YOGA · PORTFOLIO PROJECT DATA (machine-readable) ===
project:
  name: Diwata Yoga
  slug: diwata-yoga
  status: Live
  live_url: https://diwatayoga.vercel.app
  github_url: https://github.com/Aki1104/diwatayoga
  built_by: BUVA (Back Up Virtual Assistance)
  project_type: Passion project — skills showcase
  contact_email: backupvirtualassistance@gmail.com
  timeline: Aug 2024 – May 2026 (ongoing · v2.0 in planning)

  tagline: A free, account-free online yoga studio with a searchable pose library, guided videos, and philosophy for every level.

  problem: >
    Yoga is one of the most-practiced wellness disciplines in the world, yet most
    online platforms lock poses, classes, and guidance behind paywalls or accounts.
    Beginners have no structured, free progression path, and reference material
    (poses, videos, philosophy) is scattered across dozens of sites with no single
    filterable database to learn from.

  solution: >
    Diwata Yoga consolidates everything a practitioner needs — from their first
    Mountain Pose to advanced Ashtanga flows — into one clean, free, public website
    with no login. A difficulty-filtered pose library, curated video sessions,
    philosophy articles, a community gallery, and a no-backend contact form, all
    running entirely in the browser as static files.

  key_features:
    - 18-pose library categorized by Easy / Intermediate / Hard, each with description, benefits, and image
    - Instant client-side search over a local XML pose database — zero server round-trips
    - Multi-criteria filtering by difficulty and by video duration (15 / 30 / 45 / 60 min)
    - 12 curated YouTube-embedded video sessions from 15-min morning routines to full-hour advanced flows
    - Backend-free EmailJS contact form sending mail straight from the browser
    - Fully mobile-responsive with hamburger nav and Intersection-Observer scroll animations

  tech_stack:
    - { tech: "Vanilla JS (ES6+)", why: "No framework = no build step and a tiny payload that loads fast on the low-end phones common to the target audience; a content site needs none of React's overhead." }
    - { tech: "XML data layer (poses.xml)", why: "Separates pose content from markup so non-developers can add a pose by editing one file; parsed client-side via Fetch — no database to run or pay for." }
    - { tech: "CSS custom properties", why: "One source of truth for color/spacing/typography; makes a future dark mode a single CSS block instead of a rewrite (see v2.0 roadmap)." }
    - { tech: "Intersection Observer API", why: "Scroll-reveal animations without listening to high-frequency scroll events — smooth on mobile, no jank." }
    - { tech: "EmailJS", why: "A working contact form with zero backend; mail is sent from the client, so there's no server to deploy, secure, or maintain." }
    - { tech: "Vercel (static hosting)", why: "Free tier with unlimited bandwidth and Git-push deploys; a static site never has cold starts, timeouts, or runtime errors." }

  biggest_challenge: >
    Delivering genuinely interactive features — live search, multi-axis filtering,
    scroll animations, and a contact form — under a hard constraint of no backend
    and no framework. Solved by leaning entirely on browser-native APIs (Fetch,
    Intersection Observer, localStorage-ready architecture) and a decoupled XML
    data layer, so the site stays a pile of static files that any CDN can serve.

  what_i_learned: >
    How far native browser APIs go before you actually need a framework or a server,
    and the payoff of separating data (XML) from presentation so content can scale
    without touching code. What I'd do differently: design a richer pose schema up
    front (Sanskrit names, body-focus tags, breath cues) instead of retrofitting it —
    which is exactly what the v2.0 roadmap now addresses.

  results: >
    Live and public on Vercel with no account barrier — 18-pose library, 12 video
    tutorials, instant search, and a working contact form, all on a $0 hosting bill.
    A documented v2.0 roadmap (dark mode, PWA/offline, breathwork timer, sequence
    builder) is scoped to keep the same zero-backend constraint.

  screenshots:
    - { file: home.png,        caption: "Home — hero & offerings" }
    - { file: information.png, caption: "Information — pose library & video tutorials" }
    - { file: search.png,      caption: "Search — client-side pose search" }
    - { file: gallery.png,     caption: "Inspiration gallery" }

  highlight: >
    The whole platform proves you can ship a real, useful product with zero servers,
    zero frameworks, and zero cost — every interactive feature is a browser-native API.
```

---

## Table of Contents

- [Portfolio Data Block](#-portfolio-data-block)
- [What is this?](#what-is-this)
- [Screenshots](#screenshots)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Key Features](#key-features)
- [Tech Stack & Why Each Choice](#tech-stack--why-each-choice)
- [Engineering Approach](#engineering-approach)
- [Biggest Challenge](#biggest-challenge)
- [What We Learned](#what-we-learned)
- [Results & Impact](#results--impact)
- [Live Site](#live-site)
- [Project Structure](#project-structure)
- [Contact & Support](#contact--support)
- [License](#license)

---

## What is this?

Diwata Yoga is a free, fully static yoga web platform built for students and practitioners of all skill levels. It provides a structured library of yoga poses, curated video tutorials, philosophy articles, and a searchable pose database — all accessible in the browser with no account required.

---

## Screenshots

**Home — Hero & Offerings**

![Home](./assets/images/screenshots/home.png)

**Information — Pose Library & Video Tutorials**

![Information](./assets/images/screenshots/information.png)

**Search — Client-Side Pose Search**

![Search](./assets/images/screenshots/search.png)

**Gallery**

![Gallery](./assets/images/screenshots/gallery.png)

---

## The Problem

Yoga is one of the most widely practiced wellness disciplines in the world, yet beginners often struggle to find a single, organized, free resource that covers poses, tutorials, and philosophy together.

- Most yoga platforms lock content behind paywalls or subscriptions
- Beginners have no structured progression path from foundational to advanced poses
- Video tutorials, written guides, and pose references are scattered across multiple websites
- No centralized, filterable database for exploring poses by difficulty level

---

## The Solution

Diwata Yoga consolidates everything a yoga practitioner needs — from their very first Mountain Pose to advanced Ashtanga sequences — into one clean, free, publicly accessible website. Users can browse an organized pose library filtered by difficulty, follow along with curated video sessions from beginner to advanced, read philosophy articles, and explore a community gallery, all without creating an account.

---

## Key Features

- **Yoga Pose Library** — Categorized collection of Easy, Intermediate, and Hard asanas, each with a description, image, and benefits
- **Difficulty Filtering** — Filter poses and video tutorials by skill level (Easy / Intermediate / Hard) or video duration (15 / 30 / 45 / 60 min)
- **Client-Side Pose Search** — Instant search powered by Vanilla JS querying a local XML pose database — no server required
- **Video Tutorial Gallery** — 12 curated YouTube-embedded sessions ranging from 15-minute morning routines to full-hour advanced flows
- **Philosophy Articles** — Featured readings on yoga authenticity, Sādhana, Hatha Yoga history, and beginner tips
- **Inspiration Gallery** — Browseable photo gallery of community and instructor imagery with category filters
- **EmailJS Contact Form** — Visitors can send messages directly from the browser without a backend
- **Mobile-Responsive Navigation** — Hamburger menu for seamless experience on all screen sizes
- **Scroll Animations** — Page elements animate into view as users scroll for a polished, immersive feel
- **Instructor Showcase** — Profiles of featured certified yoga instructors on the home page
- **Community Testimonials** — Real member stories displayed on the home page
- **Google Maps Integration** — Embedded location map on the About Us page

---

## Tech Stack & Why Each Choice

The stack was chosen around one hard constraint: **a real, interactive product with no backend, no framework, and no hosting cost.** Every choice below earns its place against that goal.

| Technology | Role | Why this choice |
|---|---|---|
| **Vanilla JS (ES6+)** | All interactivity | No framework means no build step and a tiny payload that loads fast on the low-end phones common to the target audience. A content site doesn't need React's overhead. |
| **XML (`poses.xml`)** | Data layer | Separates pose content from markup so a non-developer can add a pose by editing one file. Parsed client-side via the Fetch API — no database to run or pay for. |
| **CSS custom properties** | Theming | One source of truth for color, spacing, and typography. Makes a future dark mode a single CSS block instead of a rewrite (see the v2.0 roadmap). |
| **Intersection Observer API** | Scroll animations | Reveals elements on scroll without listening to high-frequency scroll events — smooth on mobile, no jank. |
| **EmailJS** | Contact form | A working form with zero backend; mail is sent from the client, so there is no server to deploy, secure, or maintain. |
| **Vercel** | Hosting | Free tier with unlimited bandwidth and Git-push deploys. A static site never has cold starts, timeouts, or runtime errors. |
| **Google Fonts** | Typography | Poppins (body) + Playfair Display (headings) for a calm, editorial feel with no self-hosting overhead. |
| **YouTube Embeds · Google Maps** | Media & location | Offload video streaming and mapping to services built for it — no bandwidth or tiling cost on our side. |

> **The thesis:** every interactive feature on this site is a browser-native API. No frameworks, no servers, runs entirely in the browser.

---

## Engineering Approach

How the no-backend constraint actually shapes the codebase:

- **Data is decoupled from code.** Poses live in `assets/data/poses.xml`, not hardcoded in HTML. `js/main.js` fetches and parses the XML at runtime, so content scales (and changes) without touching application logic.
- **Search runs entirely client-side.** The pose XML is fetched once, then queried in memory with plain JavaScript string matching — instant results, zero server round-trips.
- **Filtering is class-driven.** `setupFilterButtons()` toggles an active state and shows/hides DOM nodes by class, then re-triggers scroll animations so filtered-in cards still animate.
- **Theming is variable-driven.** All colors flow from CSS custom properties in `css/global.css`, which is what makes the planned dark mode a one-block change rather than a refactor.
- **Graceful degradation by design.** If EmailJS, YouTube, or a browser API is unavailable, the rest of the page still works — nothing is a hard dependency for core browsing.

---

## Biggest Challenge

Delivering genuinely interactive features — live search, multi-axis filtering, scroll animations, and a contact form — under a **hard constraint of no backend and no framework.**

**How we solved it:** by leaning entirely on browser-native APIs (Fetch, Intersection Observer) and a decoupled XML data layer. The site stays a pile of static files that any CDN can serve, yet still feels like an app. The contact form, which would normally need a server, is handled by EmailJS sending mail straight from the browser.

---

## What We Learned

How far native browser APIs go *before* you actually need a framework or a server — and the payoff of separating data (XML) from presentation so content can scale without touching code.

**What we'd do differently:** design a richer pose schema up front — Sanskrit names, body-focus tags, breath cues, durations — instead of retrofitting them later. That single decision unlocks search, multi-axis filters, and a practice builder, and is exactly what the [v2.0 roadmap](./assets/_docs/roadmap.md) now addresses.

---

## Results & Impact

- **Live and public** on Vercel with **no account barrier** — anyone can use it instantly.
- **18-pose library**, **12 curated video tutorials**, instant client-side search, and a working contact form.
- **$0 hosting bill** — the entire platform runs on static files.
- A documented **[v2.0 roadmap](./assets/_docs/roadmap.md)** (dark mode, PWA/offline, breathwork timer, sequence builder) scoped to keep the same zero-backend constraint.

---

## Live Site

🔗 **[diwatayoga.vercel.app](https://diwatayoga.vercel.app)**

- **Home** — `/index.html`
- **Information (Poses & Videos)** — `/information.html`
- **Search** — `/search.html`
- **Gallery** — `/gallery.html`
- **About Us** — `/aboutus.html`

> Public access — no login required.

---

## Project Structure

```
├── index.html              ← Home page
├── information.html        ← Pose library, videos & articles
├── search.html             ← Client-side pose search
├── gallery.html            ← Inspiration gallery
├── aboutus.html            ← Team & mission
├── css/                    ← Per-page and global stylesheets
├── js/
│   ├── main.js             ← Navigation, animations & filtering
│   └── emailfunc.js        ← EmailJS contact form integration
└── assets/
    ├── data/poses.xml      ← Yoga poses database
    └── images/             ← All site imagery
```

---

## Contact & Support

Built and maintained by **BUVA — Back Up Virtual Assistance**.

📧 **[backupvirtualassistance@gmail.com](mailto:backupvirtualassistance@gmail.com)**

---

## License

© 2024 Diwata Yoga. All rights reserved.

---

*Built with care by BUVA for all who seek balance and clarity through yoga.*

### Configure EmailJS (Optional)
To make the contact form work:
1.  Sign up for a free account at [EmailJS](https://www.emailjs.com).
2.  Find your **Service ID**, **Template ID**, and **Public Key**.
3.  Update these values in the `js/emailfunc.js` file.

---

## 🔑 Key Features Explained

### Search Functionality
- **Pure JavaScript**: No server-side processing required.
- **XML Data Source**: Poses stored in `poses.xml` are loaded via the JavaScript Fetch API.
- **Real-time Search**: Get instant results as you type.
- **Filter by Difficulty**: Includes categories for Easy, Intermediate, and Hard.
- **Popular Suggestions**: Quick search tags for common poses.

### Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices.
- **Flexible Grids**: Uses modern CSS Grid and Flexbox layouts.
- **Adaptive Navigation**: Features a collapsible mobile menu.
- **Touch-Friendly**: Designed with appropriate button sizes and spacing.

### Animation System
- **Scroll Animations**: Elements fade in as you scroll using the Intersection Observer API.
- **Hover Effects**: Interactive card animations on hover.
- **Smooth Transitions**: CSS transitions are used for all interactions.
- **Performance Optimized**: Uses efficient animation triggers.

---

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2D5F5D` (Calming, natural)
- **Accent Gold**: `#C9A978` (Warm, spiritual)
- **Background**: `#F8F9FA` (Clean, light)
- **Surface**: `#FFFFFF` (Cards, sections)

### Typography Scale
- **Headings**: Playfair Display (600 weight)
- **Body**: Poppins (300-500 weights)
- **Hierarchy**: Clear visual hierarchy with appropriate sizing.

### Spacing System
- **XS**: `0.5rem`
- **SM**: `1rem`
- **MD**: `2rem`
- **LG**: `3rem`
- **XL**: `5rem`

---

## 🔧 Customization

### Adding New Yoga Poses
1.  Edit `assets/data/poses.xml`.
2.  Add a new `<pose>` element with the following tags:
    - `<name>`: Pose name
    - `<description>`: Detailed description
    - `<benefits>`: Key benefits
    - `<difficulty>`: Easy / Intermediate / Hard
    - `<image>`: Image filename (e.g., `pose_new.jpg`)

### Modifying Styles
- **Global Variables**: Edit CSS custom properties in `css/global.css`.
- **Component Styles**: Modify individual page CSS files (e.g., `css/home.css`).
- **Color Scheme**: Update color variables in `css/global.css` for quick theme changes.

### Adding Pages
1.  Create a new HTML file (e.g., `newpage.html`).
2.  Add a corresponding CSS file in the `css/` folder (e.g., `newpage.css`).
3.  Update the navigation bar in all HTML files to include a link to the new page.

---

## 🌐 Deployment

### Static Hosting Options
- **GitHub Pages**: Free hosting for static sites.
- **Netlify**: Easy drag-and-drop deployment.
- **Vercel**: Fast deployment with Git integration.
- **Traditional Web Hosting**: Any static file hosting service.

### Deployment Steps
1.  Upload all project files and folders to your hosting provider.
2.  Ensure the file structure is maintained.
3.  Test all functionality, especially links and the search, on the live site.

## 📱 Browser Support
- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

## 🚀 Performance Features
- **Lazy Loading**: Images load as they enter the viewport.
- **Optimized Assets**: Compressed images and efficient CSS.
- **Pure JavaScript**: No framework overhead.
- **CSS Variables**: Efficient theming and updates.
- **Client-Side Processing**: No server dependencies for core features.

## 📞 Contact & Support

Built and maintained by **BUVA — Back Up Virtual Assistance**.

### Contact Information

- **Email**: [backupvirtualassistance@gmail.com](mailto:backupvirtualassistance@gmail.com)
- **Location**: Balanga City, Bataan

## 📄 License
© 2024 Diwata Yoga. All rights reserved.

## 🙏 Acknowledgments
- Yoga instructors and content contributors
- Ekhart Yoga for article references
- YouTube creators for video content
- Google Fonts for typography
- EmailJS for contact form functionality

---
Experience tranquility and peace through mindful yoga practice with Diwata Yoga. A fully client-side application that brings yoga to everyone, everywhere.