# Diwata Yoga — Case Study

> A free, immersive online yoga platform built entirely from static files — no backend, no framework, no hosting cost.
> A passion project by **BUVA (Back Up Virtual Assistance)**, built to showcase what the team can deliver.
> Live at **[diwatayoga.vercel.app](https://diwatayoga.vercel.app)**.

---

## 1. Project Overview

- **Client / Passion:** **Passion project** by **BUVA (Back Up Virtual Assistance)** — built to showcase the team's skill, not for a paying client. A real, shippable product rather than a portfolio mockup.
- **Industry:** Wellness — Yoga & Health/Fitness content.
- **Timeline:** 2 weeks from zero to the first live version. (The repository has stayed active since, with a documented v2.0 roadmap.)
- **Development Type:** **Custom Code** — hand-written HTML, CSS, and JavaScript. No site builder, no template, no low-code platform.
- **Platform / Technology:** HTML5 · CSS3 · Vanilla JavaScript (ES6+) · XML data layer (`assets/data/poses.xml`) · EmailJS · YouTube embeds · Google Maps · Google Fonts (Poppins & Playfair Display) · hosted on **Vercel**. No frameworks and no backend — the entire site runs in the browser.

---

## 2. Goal

The goal was to prove that a genuinely useful, interactive wellness product could be built and shipped with **zero backend, zero framework, and zero hosting cost** — and still feel like an app.

Yoga is one of the most-practiced wellness disciplines in the world, yet most online platforms lock poses, classes, and guidance behind paywalls or accounts. Beginners get no structured, free progression path, and reference material — poses, videos, philosophy — is scattered across dozens of sites with no single filterable place to learn from.

Diwata Yoga set out to consolidate everything a practitioner needs — from their first Mountain Pose to advanced Ashtanga flows — into one clean, free, public website with **no login required**.

---

## 3. Our Approach

### Research — what we were solving for

The market splits into two camps: heavy subscription apps (Down Dog, Glo, Alo Moves) that gate everything behind an account and a paywall, and scattered free pages — a pose on one site, a video on YouTube, an article somewhere else. Neither gives a beginner a single, organized, free starting point.

BUVA made Diwata Yoga special by doing the opposite of the paid apps: **no account, no paywall, instant access.** A practitioner lands on the site and can immediately browse a difficulty-organized pose library, follow curated videos by skill level and duration, search poses as they type, and read philosophy — without signing up for anything. As a passion project, it also let the team demonstrate the full front-end skill set (data handling, search, filtering, animation, third-party integration) on something people can actually use.

### Decisions + why

Every technical decision was made against one hard constraint: **a real, interactive product with no backend and no framework.**

- **Vanilla JavaScript instead of React/Vue.** A content site doesn't need a framework's runtime or build pipeline. Going vanilla means no build step and a tiny payload that loads fast on the low-end phones common to the target audience. Less to ship, less to break.
- **An XML data layer (`poses.xml`) instead of a database.** Poses live in their own file, decoupled from the markup, and are fetched and parsed client-side via the Fetch API. This means content scales by editing one file — no database to provision, secure, or pay for — and a non-developer can add a pose without touching code.
- **EmailJS instead of a server-side contact form.** A working contact form normally needs a backend. EmailJS sends mail straight from the browser, so there is no server to deploy or maintain — true to the no-backend rule.
- **Vercel instead of Wix/GoDaddy or a custom server.** Vercel's free tier gives unlimited bandwidth on static sites with Git-push deploys. A static site never has cold starts, timeouts, or runtime errors, so reliability is essentially free.
- **Browser-native APIs for interactivity.** Live search runs in memory after a single fetch (zero server round-trips); scroll animations use the Intersection Observer API (smooth, no scroll-event jank); theming flows from CSS custom properties so future changes stay one-block edits.

### Styling / UX

The design targets the calm, editorial feel of a yoga studio: a grounding green-and-gold palette (primary `#2D5F5D`, accent gold `#C9A978`) on a clean light background, with **Playfair Display** for headings and **Poppins** for body text to balance elegance with readability. The layout is **mobile-first** using CSS Grid and Flexbox, with a collapsible hamburger menu, touch-friendly targets, and Intersection-Observer scroll reveals for a polished, immersive scroll. All color, spacing, and type values are centralized as CSS custom properties in `css/global.css`, keeping the look consistent across all five pages.

### Security

The project is well-protected by being **fully static** — the most defensible architecture there is. With no backend, no database, and no server-side code, there is no attack surface for SQL injection, no server to breach, and no stored user credentials to leak (the site requires no accounts). The EmailJS public key is, by design, safe to expose client-side. Vercel serves everything over HTTPS, and third-party media (YouTube, Google Maps) is isolated to sandboxed embeds.

---

## 4. Outcome

A live, public yoga platform — **[diwatayoga.vercel.app](https://diwatayoga.vercel.app)** — that anyone can use instantly, with no sign-up and on a **$0 hosting bill**.

**Delivered features & UI/UX wins:**

- **5 pages** — Home, Information (poses + videos + articles), Search, Gallery, About Us — all mobile-responsive.
- **18-pose library** organized by Easy / Intermediate / Hard, each with a description, benefits, and image.
- **Instant client-side search** over the local XML database — results appear as you type, with zero server round-trips.
- **Multi-criteria filtering** by difficulty and by video duration (15 / 30 / 45 / 60 min).
- **12 curated video tutorials** spanning 15-minute morning routines to full-hour advanced flows.
- **Backend-free EmailJS contact form** that sends mail straight from the browser.
- Intersection-Observer scroll animations, instructor showcase, testimonials, and an embedded Google Maps location.

**Measurable impact — the no-backend thesis, proven:**

- **Cost & access:** $0/month hosting vs. the subscription apps it competes with (typically **$10–$20/month**), and **0 accounts required** vs. the mandatory sign-up those apps enforce — a 100% removal of the paywall and login barrier.
- **Performance:** **0 frameworks** and **0 backend services** mean **0 server round-trips** for core features — search, filtering, and navigation all run in the browser after a single data fetch, so results are effectively instant.
- **Footprint:** the entire interactive product is hand-written static files served from a CDN — **1 XML file** powers the whole pose dataset, editable without a single line of code.
- **Built in 2 weeks**, and architected to keep growing: a documented **[v2.0 roadmap](../assets/_docs/roadmap.md)** (dark mode, PWA/offline, breathwork timer, sequence builder) is scoped to preserve the same zero-backend, zero-cost constraint.

> *Note: the site does not yet run analytics, so visitor/session figures are not available. The numbers above are concrete, verifiable build and architecture metrics rather than estimated traffic.*

---

*Case study for Diwata Yoga · BUVA.*
