# 🧘 Diwata Yoga Website

A beautiful, responsive yoga website built with modern web technologies to provide an immersive yoga experience for practitioners of all levels.

![Diwata Yoga](assets/images/logo_diwata_yoga.png)

## 🌟 Features

### 🎨 Modern Design
- **Elegant Color Scheme**: Professional green and gold palette representing nature and spirituality
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Professional Typography**: Playfair Display for headings and Poppins for body text

### 📱 Pages & Functionality
- **Home**: Engaging hero section with featured content and instructor showcase
- **Information**: Comprehensive yoga resources including articles, poses, and video tutorials
- **Search**: Dynamic pose search functionality with XML data integration
- **Gallery**: Beautiful image gallery with filtering capabilities
- **About Us**: Team information with interactive maps and contact details

### ⚡ Interactive Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Content Filtering**: Filter poses, videos, and gallery items by difficulty and categories
- **Smooth Scrolling**: Enhanced navigation within pages
- **Contact Forms**: Email integration using EmailJS
- **Scroll Animations**: Elements animate as you scroll down the page
- **Client-Side Search**: Pure JavaScript search without server requirements

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with modern structure
- **CSS3**: Advanced features including CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)**: Vanilla JavaScript for all interactions
- **CSS Animations**: Keyframe animations and transitions

### Data & External Services
- **XML**: Data storage for yoga poses (`assets/data/poses.xml`)
- **EmailJS**: Contact form email service integration
- **Google Fonts**: Typography (Poppins & Playfair Display)
- **YouTube Embeds**: Video tutorials integration
- **Google Maps**: Location maps in About Us page

## 📁 Project Structure

diwata-yoga/
├── index.html # Home page
├── information.html # Information & resources
├── search.html # Search functionality (Pure HTML/JS)
├── gallery.html # Image gallery
├── aboutus.html # About Us page
│
├── css/ # Stylesheets
│ ├── global.css # Global styles & variables
│ ├── home.css # Home page styles
│ ├── information.css # Information page styles
│ ├── gallery.css # Gallery page styles
│ ├── aboutus.css # About Us page styles
│ └── search.css # Search page styles
│
├── js/ # JavaScript files
│ ├── main.js # Main functionality & animations
│ └── emailfunc.js # EmailJS integration
│
└── assets/
├── data/
│ └── poses.xml # Yoga poses database
└── images/ # All project images
├── logo_diwata_yoga.png
├── position_.webp # Yoga pose images
├── instructor_.jpg # Instructor photos
└── ... # Other images


## 🚀 Quick Start

### Prerequisites
- Modern web browser (no server required!)
- For full functionality: Live server or web hosting

### Installation Steps

1. **Download the Project**
   ```bash
   # Clone or download the ZIP file
   Run Locally (Choose one method):

    Method 1: Simple File Opening

    Open index.html directly in your web browser

    Note: Some features may require a local server due to browser security restrictions

    Method 2: Local Server (Recommended)

# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000

Access the Website

Navigate to http://localhost:8000 in your browser

Or open index.html directly for basic functionality

Configure EmailJS (Optional)

Update EmailJS credentials in js/emailfunc.js

Replace with your EmailJS service ID, template ID, and public key

 Key Features Explained
Search Functionality
Pure JavaScript: No server-side processing required

XML Data Source: Poses stored in poses.xml loaded via JavaScript Fetch API

Real-time Search: Instant results as you type

Filter by Difficulty: Easy, Intermediate, and Hard categories

Popular Suggestions: Quick search tags for common poses

Responsive Design
Mobile-First Approach: Optimized for mobile devices

Flexible Grids: CSS Grid and Flexbox layouts

Adaptive Navigation: Collapsible mobile menu

Touch-Friendly: Appropriate button sizes and spacing

Animation System
Scroll Animations: Elements fade in as you scroll using Intersection Observer

Hover Effects: Interactive card animations

Smooth Transitions: CSS transitions for all interactions

Performance Optimized: Efficient animation triggers

🎨 Design System
Color Palette
Primary Green: #2D5F5D (Calming, natural)

Accent Gold: #C9A978 (Warm, spiritual)

Background: #F8F9FA (Clean, light)

Surface: #FFFFFF (Cards, sections)

Typography Scale
Headings: Playfair Display (600 weight)

Body: Poppins (300-500 weights)

Hierarchy: Clear visual hierarchy with appropriate sizing

Spacing System
XS: 0.5rem

SM: 1rem

MD: 2rem

LG: 3rem

XL: 5rem

🔧 Customization
Adding New Yoga Poses
Edit assets/data/poses.xml

Add new <pose> element with:

<name>: Pose name

<description>: Detailed description

<benefits>: Key benefits

<difficulty>: Easy/Intermediate/Hard

<image>: Image filename

Modifying Styles
Global Variables: Edit CSS custom properties in global.css

Component Styles: Modify individual page CSS files

Color Scheme: Update color variables for quick theme changes

Adding Pages
Create new HTML file following existing structure

Add corresponding CSS file

Update navigation in all HTML files

Include necessary JavaScript functionality

🌐 Deployment
Static Hosting Options
GitHub Pages: Free hosting for static sites

Netlify: Easy drag-and-drop deployment

Vercel: Fast deployment with Git integration

Traditional Web Hosting: Any static file hosting service

Deployment Steps
Upload all files to your hosting provider

Ensure file structure is maintained

Test all functionality on the live site

📱 Browser Support
Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

🚀 Performance Features
Lazy Loading: Images load as they enter viewport

Optimized Assets: Compressed images and efficient CSS

Pure JavaScript: No framework overhead

CSS Variables: Efficient theming and updates

Client-Side Processing: No server dependencies for core features

📞 Contact & Support
Developers:

Marc Parubrub (Lead Developer)

Veeny Bautista (Assistant Developer)

Contact Information:

Located in Upper Tuyo, Balanga City, Bataan

Phone: 09691731931 / 09386109857

📄 License
© 2024 Diwata Yoga. All rights reserved.

🙏 Acknowledgments
Yoga instructors and content contributors

Ekhart Yoga for article references

YouTube creators for video content

Google Fonts for typography

EmailJS for contact form functionality

Experience tranquility and peace through mindful yoga practice with Diwata Yoga. A fully client-side application that brings yoga to everyone, everywhere.