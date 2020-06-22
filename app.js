let controller;
let letterScene;
let pageScene;

function animateLetters() {
  // Init controller
  controller = new ScrollMagic.Controller();

  // Select the letter container
  const letterContainer = document.querySelectorAll(".letter-container");

  // Loop over the container to get each letter
  letterContainer.forEach(alpha => {
    const letter = alpha.querySelectorAll(".letter");

    // GSAP
    const letterTimeline = new gsap.timeline({
      defaults: { duration: 1, ease: "power3.ease" }
    });

    letterTimeline.fromTo(
      letter,
      { x: "-200%", opacity: 0 },
      { x: "0%", opacity: 1 }
    );

    // Create a scene
    letterScene = new ScrollMagic.Scene({
      triggerElement: alpha,
      triggerHook: 0.35
    })
      .setTween(letterTimeline)
      .addTo(controller);

    // New Animation
    const pageTimeline = new gsap.timeline();

    pageScene = new ScrollMagic.Scene({
      triggerElement: alpha,
      duration: "200%",
      triggerHook: 0
    })
      .setTween(pageTimeline)
      .addTo(controller);
  });
}

animateLetters();
