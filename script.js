
/* ==================animated typing effect in hero section========================= */
// add the typed js "    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> " inside the head tag.
document.addEventListener("DOMContentLoaded", function() {
    let options = {
      strings: [
        "a Frontend Developer.",
        "an Artist.",
        "a Photographer."
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      backDelay: 2000, // delay after typing and before backspacing
      startDelay: 500, // delay before typing starts
      loop: true // loop the animation
    };

    let typed = new Typed(".typed", options);
  });

/* ============providing background to the navbar for visiblity when it click on hamburger menu===================== */
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
    const navbar = document.getElementsByClassName("navbar")[0];
  
    navbarToggler.addEventListener("click", function () {
      navbar.classList.toggle("nav-color");
    });
  });
  