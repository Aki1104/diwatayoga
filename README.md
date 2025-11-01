# 🧘 Diwata Yoga Website Project

This `README.md` file provides a complete overview of the Diwata Yoga website project, its file structure, and the technologies used.

## Purpose

Diwata Yoga is a multi-page, static and partially dynamic website designed to be a beautiful and informative front-end for a yoga community. It showcases classes, poses, articles, and instructors. The project is built using vanilla HTML, CSS, and JavaScript, with a small PHP component for server-side search.

---

## 📁 File Structure

The project is organized into a clean, easy-to-manage structure.

diwatayoga_project/ 
│ 
├── 📄 index.html (Homepage, formerly home.html) 
├── 📄 information.html (Yoga info, poses, videos) 
├── 📄 gallery.html (Image gallery) 
├── 📄 aboutus.html (Coder profiles) 
├── 📄 search.php (Search page with PHP logic) 
│ ├── 📁 css/
│ ├── 📄 global.css (NEW: Fonts, nav, footer, buttons, animations)
│ ├── 📄 home.css (Homepage-specific styles) 
│ ├── 📄 information.css (Info page-specific styles) 
│ ├── 📄 gallery.css (Gallery-specific styles) 
│ ├── 📄 aboutus.css (About Us-specific styles) 
│ └── 📄 search.css (Search page-specific styles) 
│ ├── 📁 js/ 
│ └── 📄 main.js (NEW: All project JavaScript in one file) 
│ ├── 📁 assets/ 
│ │ │ ├── 📁 data/ 
│ │ └── 📄 poses.xml (Data source for yoga poses) 
│ │ │ └── 📁 images/ 
    │ ├── (All .jpg, .png, .webp image files) 
│ └── 📄 README.md (This file)


---

## 🛠️ Languages & Technologies

This project is intentionally built from scratch to be lightweight and demonstrate core web development skills.

* **Frontend:**
    * **HTML5:** Written using modern, semantic tags (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) for better SEO and accessibility.
    * **CSS3:** Heavily uses modern CSS features including:
        * **CSS Variables:** For a global, easy-to-change color and font palette (see `css/global.css`).
        * **Flexbox:** For all page layouts and card alignment.
        * **CSS Animations:** Keyframe animations for on-scroll effects.
    * **JavaScript (ES6+):** All JavaScript is vanilla (no jQuery or frameworks).
        * DOM Manipulation for filters and mobile menu.
        * Event Listeners for all user interaction.

* **Backend:**
    * **PHP:** A single file (`search.php`) is used to handle the server-side logic for the search bar. It loads the XML file, parses it, and renders the results.

* **Data Format:**
    * **XML:** A simple XML file (`assets/data/poses.xml`) acts as a database for the yoga poses, making the site's content easy to update without touching the HTML.

## 🚀 Key Features & How They Work

* **On-Scroll Animations:** Elements animate into view when the user scrolls. This is powered by a JavaScript `IntersectionObserver` in `js/main.js` that adds a `.is-visible` class to elements with animation classes (e.g., `.fade-in-up`, `.slide-in-left`).
* **Responsive Mobile Menu:** On mobile, the navigation collapses into a "hamburger" menu. This is built with pure CSS (toggling `display` and `transform`) and triggered by a simple event listener in `js/main.js`.
* **Content Filtering:** The Information and Gallery pages use JavaScript to filter content. The script adds/removes a `display: none` style to items based on their class name.
* **Dynamic Search:** The `search.php` page reads the `poses.xml` file on the server, finds all poses that match the user's query, and then uses PHP `echo` statements to build the HTML for the search results.
* **Global Styling:** All shared elements (navigation, footer, buttons, fonts, and animations) are defined in `css/global.css`. This makes the site's design consistent and easy to update.