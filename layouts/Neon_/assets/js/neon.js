function initTypewriter() {
    const titleToAnimate = document.querySelector("[data-type]");
    let typewriter = new Typewriter(titleToAnimate, { loop: true });
    const text = titleToAnimate.dataset.type;

    typewriter
        .typeString(text)
        .pauseFor(2500)
        .deleteAll()
        .start();
}

initTypewriter();

function initStickyHeader() {
    const header = document.querySelector("[data-sticky]");
    const stickyClass = "is-sticky";
    let scrollPos = window.scrollY;
    window.addEventListener("scroll", e => {
        scrollPos = window.scrollY;
        (scrollPos === 0) ? header.classList.remove(stickyClass) : header.classList.add(stickyClass);
    });
}

initStickyHeader();

function initResponsiveMenu() {
    const menuBtn = document.querySelector(".nav-toggle");
    const activeClass = "is-active";
    menuBtn.addEventListener("click", e => menuBtn.classList.toggle(activeClass));
}

initResponsiveMenu();