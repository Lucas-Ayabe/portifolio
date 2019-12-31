function initFixedHeader() {
    const headers = document.querySelectorAll(".header-fixed-top");

    function toggleHeader(e, header) {
        const windowY = window.innerHeight;
        const scrollY = window.scrollY;
        (scrollY > windowY / 8) ? header.classList.add('is-active') : header.classList.remove('is-active');
    }

    headers.forEach(header => {
        window.addEventListener("scroll", e => toggleHeader(e, header));
    });
}

initFixedHeader();

function initMenu() {
    const headerToggle = document.querySelector(".header_toggle");

    function toggleNav(state) {
        const nav = document.querySelector(".nav");
        nav.classList.toggle(state);
    }

    headerToggle.addEventListener("click", e => {
        toggleNav("is-active");
    });
}

initMenu();

function initAnimations() {
    const headerTitle = document.querySelector(".banner_title.header_logo");
    const cardDeckCards = ".card-deck .card";

    gsap.from(headerTitle, {
        duration: .75,
        scale: 0,
        opacity: 0,
        ease: Bounce.easeOut
    });

    gsap.to(cardDeckCards, {
        duration: .3,
        scale: 1,
        opacity: 1,
        stagger: .2,
        delay: .3
    });
}

initAnimations();