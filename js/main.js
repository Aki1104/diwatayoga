/**
 * ----------------------------------------------------------------
 * Diwata Yoga Main JavaScript File - REDESIGNED
 * ----------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", function() {

    // =================================================================
    // 1. INTERSECTION OBSERVER (for scroll animations)
    // =================================================================
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // =================================================================
    // 2. MOBILE NAVIGATION TOGGLE
    // =================================================================
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const hamburger = this.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            });
        });
    }

    // =================================================================
    // 3. CONTACT FORM HANDLER
    // =================================================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return false;
            }
            
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
            return false;
        });
    }

    // =================================================================
    // 4. SMOOTH SCROLL FOR INFORMATION PAGE
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
    
    function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 80;
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // =================================================================
    // 5. EXTERNAL LINK FUNCTIONS
    // =================================================================
    window.openLink0 = function() { window.open("https://www.ekhartyoga.com/articles/browse_all", "_blank"); }
    window.openLink1 = function() { window.open("https://www.ekhartyoga.com/articles/wellbeing/how-to-be-your-authentic-self", "_blank"); }
    window.openLink2 = function() { window.open("https://www.ekhartyoga.com/articles/practice/sadhana-developing-a-sustainable-practice", "_blank"); }
    window.openLink3 = function() { window.open("https://www.ekhartyoga.com/articles/practice/top-10-tips-for-beginner-yogis", "_blank"); }
    window.openLink4 = function() { window.open("https://www.ekhartyoga.com/articles/philosophy/what-is-hatha-yoga", "_blank"); }

    // =================================================================
    // 6. UNIFIED FILTER SYSTEM
    // =================================================================
    function setupFilterButtons(buttonContainerSelector, itemSelector) {
        const buttonContainer = document.querySelector(buttonContainerSelector);
        if (!buttonContainer) return;

        const buttons = buttonContainer.querySelectorAll('.btn');
        const items = document.querySelectorAll(itemSelector);

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Filter items
                items.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = '';
                        // Re-trigger animation
                        item.classList.remove('is-visible');
                        setTimeout(() => item.classList.add('is-visible'), 10);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Setup filters for different pages
    setupFilterButtons('.positions-section .filter-buttons', '.position-card');
    setupFilterButtons('.videos-section .filter-buttons', '.video-card');
    setupFilterButtons('.gallery-section .filter-buttons', '.gallery-item');
    setupFilterButtons('.articles-section .filter-buttons', '.article-card');

    // =================================================================
    // 7. LAZY LOADING FOR IMAGES (Performance Optimization)
    // =================================================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // =================================================================
    // 8. SCROLL TO TOP BUTTON (Optional Enhancement)
    // =================================================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = 'var(--color-primary-dark)';
    });

    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = 'var(--color-primary)';
    });

});