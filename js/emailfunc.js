/**
 * EmailJS Functionality for Diwata Yoga Contact Forms
 */

// Initialize EmailJS when the script loads
(function() {
    // Initialize EmailJS with your Public Key
    // Replace 'YOUR_PUBLIC_KEY_HERE' with your actual EmailJS public key
    emailjs.init("xT9hVOJiXwTvpouPF");
    console.log('EmailJS initialized');
})();

// Contact form handler
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    
    if (!contactForm) {
        console.log('Contact form not found');
        return;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toLocaleString(),
            page: window.location.pathname.split('/').pop() || 'index.html'
        };
        
        // Send email using EmailJS
        // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        emailjs.send('service_pivcb39', 'template_nukxnxz', formData)
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setupContactForm };
}