/* =========================================================
   MAYFAIR HALL — MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const mobileLinks = document.querySelectorAll(
    ".nav-links a"
);

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".intro, .events, .venue, .experience, .gallery, .booking"
);

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   NAVBAR BACKGROUND ON SCROLL
========================================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   IMAGE LOADING
========================================================= */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements = document.querySelectorAll(
    "[data-current-year]"
);

yearElements.forEach(element => {

    element.textContent = new Date().getFullYear();

});


/* =========================================================
   ESCAPE KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    if (!navLinks || !navLinks.classList.contains("active")) {
        return;
    }

    navLinks.classList.remove("active");

    if (menuToggle) {

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    }

});


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});
