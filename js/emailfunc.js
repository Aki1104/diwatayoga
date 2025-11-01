/**
 * EmailJS Functionality for Diwata Yoga Contact Forms
 */

// Wait for both DOM and EmailJS to be ready
function initializeEmailJS() {
    // Check if emailjs is loaded before initializing
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "xT9hVOJiXwTvpouPF", // Your Public Key
        });
        console.log('EmailJS initialized successfully');
        return true;
    } else {
        console.error("EmailJS SDK not loaded yet.");
        return false;
    }
}

// Contact form handler
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    
    if (!contactForm) {
        console.log('Contact form not found');
        return;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Check if EmailJS is ready
        if (typeof emailjs === 'undefined') {
            showFormMessage('Email service not ready. Please refresh the page and try again.', 'error');
            return;
        }

        // Get form values directly
        const from_name = document.getElementById('name').value.trim();
        const from_email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        console.log('Form values before validation:', { from_name, from_email, message });

        // VALIDATE FORM FIELDS - PREVENT EMPTY SUBMISSIONS
        if (!from_name) {
            showFormMessage('Please enter your name.', 'error');
            return;
        }
        
        if (!from_email) {
            showFormMessage('Please enter your email address.', 'error');
            return;
        }
        
        if (!message) {
            showFormMessage('Please enter your message.', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(from_email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        console.log('Form values AFTER validation:', { from_name, from_email, message });

        // Get the button and show a "sending" state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Send the form using EmailJS
        emailjs.sendForm('service_n4y25i2', 'template_nukxnxz', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, function(error) {
                console.log('FAILED...', error);
                
                // Show error message
                showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
    
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            // Fallback alert if form message element doesn't exist
            alert(message);
        }
    }
}

// Debug function - Use direct element access
function debugFormData() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    console.log('Form data (direct access):', {
        from_name: nameInput ? nameInput.value : 'NOT FOUND',
        from_email: emailInput ? emailInput.value : 'NOT FOUND',
        message: messageInput ? messageInput.value : 'NOT FOUND'
    });
}

// Initialize when everything is ready
document.addEventListener('DOMContentLoaded', function() {
    // Try to initialize EmailJS immediately
    let emailjsReady = initializeEmailJS();
    
    // If EmailJS isn't ready, wait a bit and try again
    if (!emailjsReady) {
        console.log('Waiting for EmailJS to load...');
        setTimeout(() => {
            emailjsReady = initializeEmailJS();
            if (emailjsReady) {
                console.log('EmailJS loaded after delay');
                setupContactForm();
            } else {
                console.error('EmailJS failed to load after delay');
            }
        }, 1000);
    } else {
        setupContactForm();
    }
});