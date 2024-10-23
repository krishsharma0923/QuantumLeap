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


// image slider 
const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;


// initialzeSlider();
document.addEventListener('DOMContentLoaded', initialzeSlider);

function initialzeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }

    
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}