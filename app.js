let controller;
let letterScene;

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
      defaults: { duration: 1.5, ease: "bounce.out" }
    });

    letterTimeline.fromTo(
      letter,
      { y: "-200%", opacity: 0 },
      { y: "0%", opacity: 1 }
    );

    // This is a custom bounce that also has a squish effect. I won't be able to get it to work until I implement svg letters

    // CustomBounce.create("myBounce", { strength: 0.7, squash: 3 });
    // tl.to("#ball", duration, { y: 550, ease: "myBounce" }).to(
    //   "#ball",
    //   duration,
    //   {
    //     scaleY: 0.5,
    //     scaleX: 1.3,
    //     ease: "myBounce-squash",
    //     transformOrigin: "bottom"
    //   },
    //   0
    // );

    // Create a scene
    letterScene = new ScrollMagic.Scene({
      triggerElement: alpha,
      triggerHook: 0.5
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
