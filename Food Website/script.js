     // Form validation function
     function validateForm(event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Get form field values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Clear previous error messages
        document.getElementById('nameError').style.display = 'none';
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('messageError').style.display = 'none';

        // Name validation
        if (name.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Message validation
        if (message.trim() === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        // If everything is valid, submit the form and reset
        if (isValid) {
            alert("Form submitted successfully!");

            // Reset the form fields
            document.getElementById('contactForm').reset();

            // Optionally, clear error messages if they persist after reset
            document.getElementById('nameError').style.display = 'none';
            document.getElementById('emailError').style.display = 'none';
            document.getElementById('messageError').style.display = 'none';

            // Here you can add your AJAX code or other form submission logic.
        }

        return isValid;
    }