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

    // Create a scene
    letterScene = new ScrollMagic.Scene({
      triggerElement: alpha,
      triggerHook: 0.39
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

new Vivus("A-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("B-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("C-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("D-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("E-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("F-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("G-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("H-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("I-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("J-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("K-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("L-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("M-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("N-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("O-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("P-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("Q-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("R-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("S-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("T-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("U-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("V-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("W-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("X-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("Y-svg", { duration: 100, type: "oneByOne" }, animateLetters());
new Vivus("Z-svg", { duration: 100, type: "oneByOne" }, animateLetters());
