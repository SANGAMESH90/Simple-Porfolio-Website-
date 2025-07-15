// Form Submission Handling
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the form (just a simple check)
    if (name && email && message) {
        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
        formResponse.style.color = 'green';

        // Clear form fields
        contactForm.reset();
    } else {
        formResponse.textContent = 'Please fill out all fields.';
        formResponse.style.color = 'red';
    }
});
