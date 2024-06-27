document.addEventListener('DOMContentLoaded', () => {
    // Form validation setup
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });

        function validateForm() {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return false;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            // If validation passes, you can proceed with form submission
            // For now, we'll just log the form data to the console
            console.log('Form Submitted', { name, email, message });

            // Optional: Reset form fields after successful submission
            form.reset();
        }

        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(email);
        }
    }

    // Toggle project content visibility
    document.querySelectorAll('.project-btn').forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-target');
            const content = document.getElementById(contentId);
            content.classList.toggle('project-content-visible');
        });
    });

   
});
