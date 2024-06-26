let form = document.querySelector(".registration__form");
let button = document.querySelector(".registration__button");

// Function to validate phone number format
function isPhoneComplete(phone) {
    return /^\+\(380\)-\d{3}-\d{2}-\d{2}$/.test(phone);
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Add click event listener to the submit button
button.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent form submission
    let isValid = true;

    // Validate all required fields
    form.querySelectorAll('[required]').forEach(field => {
        if (field.value.trim() === '') {
            field.classList.add('highlight-error');
            isValid = false;
        } else if (field.type === 'tel' && !isPhoneComplete(field.value)) {
            field.classList.add('highlight-error');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            field.classList.add('highlight-error');
            isValid = false;
        } else if (field.type === 'checkbox' && !field.checked) {
            field.classList.add('highlight-error');
            isValid = false;
        } else {
            field.classList.remove('highlight-error');
        }
    });

    // If all fields are valid, submit the form
    if (isValid) {
        console.log("Form submitted!");
        form.reset();
    }
});

// Remove error highlighting on input
form.addEventListener('input', (e) => {
    if (e.target.required) {
        e.target.classList.remove('highlight-error');
    }
});