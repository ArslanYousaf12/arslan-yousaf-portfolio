document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Disable button to prevent multiple submissions
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';
      
      // Get form data
      const formData = new FormData(form);
      const name = formData.get('fullname');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Send email using EmailJS (requires account setup)
      emailjs.send('your_service_id', 'your_template_id', {
        from_name: name,
        reply_to: email,
        message: message
      })
      .then(function() {
        // Success message
        alert('Your message has been sent successfully!');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
      })
      .catch(function(error) {
        // Error handling
        console.error('Error sending email:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>';
      });
    });
  }
});