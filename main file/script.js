const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

// show menu (responsive)
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// close menu (responsive)
hideMenuBtn.addEventListener("click", () => menuBtn.click());

// show popup 
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// hide popup 
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());


loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id == "signup-link" ? 'add' : 'remove']("show-signup");
    });
})