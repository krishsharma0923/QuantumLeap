const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

// show popup 
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


// hide popup 
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// interchange between login and signup page 
loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id == "signup-link" ? 'add' : 'remove']("show-signup");
    });
})