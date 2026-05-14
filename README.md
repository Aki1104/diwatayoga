# Diwata Yoga
### A free, immersive online yoga platform for practitioners of all levels — from first breath to advanced flow.

![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS-orange?style=flat-square)

---

## Table of Contents

- [What is this?](#what-is-this)
- [Screenshots](#screenshots)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
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

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| Backend | None — fully static |
| Data | XML (`assets/data/poses.xml` — client-side parsed) |
| Hosting | Vercel |
| Auth | None — public access |
| Fonts | Poppins & Playfair Display — Google Fonts |
| External Services | EmailJS · YouTube Embeds · Google Maps |

No frameworks. Clean vanilla code that runs entirely in the browser.

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

Built and maintained by **Innovator Crews**

---

**Marc Parubrub** — Lead Developer

- **Portfolio:** [msbp-portfolio.vercel.app](https://msbp-portfolio.vercel.app)
- **Email:** [marcparubrub.dev@gmail.com](mailto:marcparubrub.dev@gmail.com)
- **GitHub:** [@Aki1104](https://github.com/Aki1104)

**Veeny Bautista** — Assistant Developer

- **Portfolio:** [veenybautista.vercel.app](https://veenybautista.vercel.app)
- **Email:** [vrmb.tech@gmail.com](mailto:vrmb.tech@gmail.com)
- **GitHub:** [@yashamiyuki](https://github.com/yashamiyuki)

**Leander Ochea** — Developer

**Armabel Ramos** — Developer

For bug reports or questions — reach out directly via email above.

---

## License

© 2024 Diwata Yoga. All rights reserved.

---

*Built with care by Innovator Crews for all who seek balance and clarity through yoga.*

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

### Developers
- **Marc Parubrub** (Lead Developer)
- **Veeny Bautista** (Assistant Developer)

### Contact Information
- **Location**: Upper Tuyo, Balanga City, Bataan
- **Email**: marcsteeven28@gmail.com / vny.btst@gmail.com

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