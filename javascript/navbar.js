/* ----- NAVBAR SECTION ANIMATION -----*/
const navLinks = document.querySelectorAll(".navbar__container__link");
console.log(navLinks);

function animateLink(el, scale, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    scale: scale,
    duration: duration,
    elasticity: elasticity,
  });
}

function enterLink(el) {
  animateLink(el, 1.2, 800, 400);
}

function leaveLink(el) {
  animateLink(el, 1.0, 600, 300);
}

navLinks.forEach((el) => {
  el.addEventListener(
    "mouseenter",
    (e) => {
      enterLink(e.target);
    },
    false
  );
  el.addEventListener(
    "mouseleave",
    (e) => {
      leaveLink(e.target);
    },
    false
  );
});