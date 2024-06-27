let form = document.querySelector(".registration__form");
let button = document.querySelector(".registration__button");

function isPhoneComplete(phone) {
    return /^\+\(380\)-\d{3}-\d{2}-\d{2}$/.test(phone);
}
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

button.addEventListener("click", (e) => {
   e.preventDefault();
   let isValid = true;
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
        }
        else {
            field.classList.remove('highlight-error');
        }
});
    if (isValid) {
        console.log("Form submitted!");
        form.reset();
    }
});

form.addEventListener('input', (e) => {
    if (e.target.required) {
        e.target.classList.remove('highlight-error');
    }
});
