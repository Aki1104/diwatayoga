/**
 * EmailJS Functionality for Diwata Yoga Contact Forms
 */

// Initialize EmailJS when the script loads
(function() {
    // Check if emailjs is loaded before initializing
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "xT9hVOJiXwTvpouPF", // Your Public Key
        });
        console.log('EmailJS initialized');
    } else {
        console.error("EmailJS SDK not loaded.");
    }
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
        e.preventDefault(); // Prevent default form submission

        // Get the button and show a "sending" state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Send the form using EmailJS - USING sendForm() like your working portfolio
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
});