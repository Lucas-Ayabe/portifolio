function initResponsiveNav(toggleClass) {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav_link");

    function toggleNav() {
        navToggle.classList.toggle(toggleClass);
        nav.classList.toggle(toggleClass);
    }

    navLinks.forEach(navLink => {
        navLink.addEventListener("click", e => {
            toggleNav();
        });
    });

    navToggle.addEventListener("click", e => {
        navToggle.classList.toggle(toggleClass);
        nav.classList.toggle(toggleClass);
    });
}
initResponsiveNav("is-active"); 