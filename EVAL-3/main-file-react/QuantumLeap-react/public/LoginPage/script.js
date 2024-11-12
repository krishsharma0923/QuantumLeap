
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id == "signup-link" ? 'add' : 'remove']("show-signup");
    });
})
