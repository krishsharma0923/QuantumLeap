const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");


// show popup 
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


// hide popup 
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
