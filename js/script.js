//navbar code start here
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector("#site-nav");

    if (!menuToggle || !siteNav) return;

    let scrollPosition = 0;

    function lockScroll() {
        scrollPosition = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.classList.add("nav-open");
    }

    function unlockScroll() {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.classList.remove("nav-open");

        window.scrollTo(0, scrollPosition);
    }

    function openNav() {
        siteNav.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.innerHTML = '<i class="fas fa-xmark"></i>';
        lockScroll();
    }

    function closeNav() {
        siteNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        unlockScroll();
    }

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        siteNav.classList.contains("active") ? closeNav() : openNav();
    });

    siteNav.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (
            siteNav.classList.contains("active") &&
            !siteNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeNav();
        }
    });

    document.querySelectorAll("#site-nav a").forEach((link) => {
        link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && siteNav.classList.contains("active")) {
            closeNav();
        }
    });

    const contactForm = document.querySelector("#contact-form");
    const formNote = document.querySelector("#form-note");

    if (contactForm && formNote) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            formNote.textContent = "Thanks. Your request has been captured for follow-up.";
            contactForm.reset();
        });
    }
});
//navbar code end here 
const contactForm = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    popup.classList.add('show');

    contactForm.reset();
});

closePopup.addEventListener('click', function () {
    popup.classList.remove('show');
});