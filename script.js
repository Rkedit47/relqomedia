const navbarToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".nav-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});