const navbarToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".nav-menu");

navbarToggle.addEventListener("click", function () {
    console.log("Button Clicked");

    navbarToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// form exchange button
const btn = document.querySelector(".select-btn");
const menu = document.querySelector(".select-menu");
const text = btn.querySelector("span");
const hidden = document.querySelector("input[name='exchange']");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
document.querySelectorAll(".select-menu li").forEach(item => {
    item.addEventListener("click", () => {
        text.textContent = item.textContent;
        hidden.value = item.dataset.value;
        menu.classList.remove("show");
    });
});
document.addEventListener("click", e => {
    if(!e.target.closest(".custom-select")){
        menu.classList.remove("show");
    }
});