/* ----- HERO SECTION ANIMATION ----- */
module.exports = {
  renderHero: () => {
    const helloMsg = document.querySelector(
      ".hero-section__main__presentation__helloMsg"
    );

    helloMsg.innerHTML = helloMsg.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    const heroTextTl = anime
      .timeline()
      .add({
        targets: ".hero-section__main__presentation__helloMsg .letter",
        translateY: [100, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 300 + 30 * i,
      })
      .add(
        {
          targets: [
            ".hero-section__main__presentation__p",
            ".navbar-brand",
            ".navbar__container__link",
          ],
          delay: anime.stagger(100),
          translateY: [200, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          begin: function () {
            heroIconTl.play();
          },
        },
        "-=1400"
      );

    let heroIconPath = anime.path("#icon-hero-path path");

    const heroIconTl = anime.timeline({ loop: true, autoplay: false }).add({
      targets: ".hero-section__main__presentation__icon",
      translateY: heroIconPath("y"),
      opacity: [0, 0.8, 1, 0.8, 0.3],
      duration: 2000,
      easing: "easeInOutSine",
      direction: "reverse",
    });
  },
};
