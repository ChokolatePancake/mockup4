let form=document.querySelector(".registration__form"),button=document.querySelector(".registration__button");function isPhoneComplete(e){return/^\+\(380\)-\d{3}-\d{2}-\d{2}$/.test(e)}function isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}button.addEventListener("click",(e=>{e.preventDefault();let t=!0;form.querySelectorAll("[required]").forEach((e=>{""===e.value.trim()?(e.classList.add("highlight-error"),t=!1):("tel"!==e.type||isPhoneComplete(e.value))&&("email"!==e.type||isValidEmail(e.value))&&("checkbox"!==e.type||e.checked)?e.classList.remove("highlight-error"):(e.classList.add("highlight-error"),t=!1)})),t&&(console.log("Form submitted!"),form.reset())})),form.addEventListener("input",(e=>{e.target.required&&e.target.classList.remove("highlight-error")}));