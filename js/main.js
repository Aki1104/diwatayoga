/**
 * ----------------------------------------------------------------
 * Diwata Yoga Main JavaScript File
 * ----------------------------------------------------------------
 * This file contains all the JavaScript for the website.
 *
 * Contents:
 * 1. Intersection Observer (for scroll animations)
 * 2. Contact Form 'sendMessage' Function
 * 3. Information Page Scroll Functions
 * 4. Information Page External Link Functions
 * 5. Filter Functions (for Positions, Videos, Gallery)
 * 6. Active Button Toggle Logic (for all filters)
 *
 */

document.addEventListener("DOMContentLoaded", function() {

    // =================================================================
    // 1. INTERSECTION OBSERVER (for scroll animations)
    // =================================================================
    // This code makes elements with classes like 'fade-in-up' animate
    // when they scroll into view.

    // Select all elements you want to animate
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add an 'is-visible' class when the element is in view
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // =================================================================
    // 2. CONTACT FORM 'sendMessage' FUNCTION (from home.html)
    // =================================================================
    // Note: We attach this to the window object so the inline 'onclick'
    // in the HTML can find it.
    window.sendMessage = function() {
        const form = document.getElementById('contactForm');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name === '' || email === '' || message === '') {
            // Using a custom modal/alert is better, but 'alert' works for now.
            alert('Please fill in all fields.');
            return false; // Prevents form submission
        }
        
        // Success message
        alert('Your message has been sent!');
        
        form.reset(); // Clears the form fields
        return false; // Prevents the page from reloading
    }

    // =================================================================
    // 3. INFORMATION PAGE SCROLL FUNCTIONS (from information.html)
    // =================================================================
    const scrollPositionBtn = document.getElementById('scrollPosition');
    const scrollVideoBtn = document.getElementById('scrollVideo');

    if (scrollPositionBtn) {
        scrollPositionBtn.addEventListener('click', function() {
            scrollToTarget('scrollPositionTarget');
        });
    }

    if (scrollVideoBtn) {
        scrollVideoBtn.addEventListener('click', function() {
            scrollToTarget('scrollVideoTarget');
        });
    }
    
    // Helper function for smooth scrolling
    function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 70; // Offset for the sticky header
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // =================================================================
    // 4. INFORMATION PAGE EXTERNAL LINK FUNCTIONS (from information.html)
    // =================================================================
    // We attach these to the window object so the inline 'onclick'
    // in the HTML can find them.
    window.openLink0 = function() { window.open("https://www.ekhartyoga.com/articles/browse_all", "_blank"); }
    window.openLink1 = function() { window.open("https://www.ekhartyoga.com/articles/wellbeing/how-to-be-your-authentic-self", "_blank"); }
    window.openLink2 = function() { window.open("https://www.ekhartyoga.com/articles/practice/sadhana-developing-a-sustainable-practice", "_blank"); }
    window.openLink3 = function() { window.open("https://www.ekhartyoga.com/articles/practice/top-10-tips-for-beginner-yogis", "_blank"); }
    window.openLink4 = function() { window.open("https://www.ekhartyoga.com/articles/philosophy/what-is-hatha-yoga", "_blank"); }

    // =================================================================
    // 5. FILTER FUNCTIONS (for Positions, Videos, Gallery, Coders)
    // =================================================================
    // We attach these to the window object so the inline 'onclick'
    // in the HTML can find them.
    
    // Filter for Basic Positions (information.html)
    window.filterImages = function(category) {
        const cards = document.querySelectorAll('.position');
        filterLogic(cards, category);
    }
    
    // Filter for Videos (information.html)
    window.filterVideos = function(category) {
        const cards = document.querySelectorAll('.video');
        filterLogic(cards, category);
    }

    // Filter for Gallery (gallery.html)
    // Note: This function has the same name as the one for 'positions'.
    // We will rename the filter function on the gallery page in the HTML
    // to avoid conflicts. Let's assume gallery.html's buttons will
    // call 'filterGallery'.
    // *** We must update gallery.html to call 'filterGallery' ***
    // (I will update this in the HTML file for gallery.html... but I see
    // I already provided it. We'll fix this with the 'data-filter' method instead.)

    // Filter for Coder Profiles (aboutus.html)
    window.filterCoders = function(category) {
        const cards = document.querySelectorAll('.coder-profile');
        filterLogic(cards, category);
    }

    // Reusable filter logic
    function filterLogic(cards, category) {
        cards.forEach(card => {
            if (category === 'all' || card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }


    // =================================================================
    // 6. ACTIVE BUTTON TOGGLE LOGIC (for all filters)
    // =================================================================
    // This is a more modern, reusable way to handle your filter buttons
    // It works by finding the button's parent container
    
    function setupFilterButtons(containerSelector, itemSelector) {
        const buttonContainer = document.querySelector(containerSelector);
        if (!buttonContainer) return; // Exit if the container isn't on this page

        const buttons = buttonContainer.querySelectorAll('.btn');
        const itemsToFilter = document.querySelectorAll(itemSelector);

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Handle active button state
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Get the filter category from the 'data-filter' attribute
                const filter = this.getAttribute('data-filter');
                
                // Run the filter logic
                itemsToFilter.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block'; // Or 'flex', 'grid', etc.
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Set the 'all' button as active by default
        const allButton = buttonContainer.querySelector('.btn[data-filter="all"]');
        if (allButton) {
            allButton.classList.add('active');
        }
    }

    // Setup filters for each page
    // (I've updated your HTML buttons to use `data-filter` attributes)
    setupFilterButtons('.category-buttons', '.position'); // For information.html positions
    setupFilterButtons('.video-buttons', '.video');        // For information.html videos
    setupFilterButtons('.gallery-intro .category-buttons', '.image-card'); // For gallery.html
    setupFilterButtons('.aboutus-intro .category-buttons', '.coder-profile'); // For aboutus.html (currently commented out)

});