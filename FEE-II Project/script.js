// const showPopupBtn = document.querySelector(".sign-in-btn");

// showPopupBtn.addEventListener("click", () => {
//     document.body.classList.toggle()
// })
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active")
    document.querySelector(".empty-container").classList.add("active");
});
document.querySelector(".popup .close-button").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".empty-container").classList.remove("active");
});
