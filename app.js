let controller;

function animateLetters() {
  // Init controller
  controller = new ScrollMagic.Controller();

  // Select the letter container
  const letterContainer = document.querySelector(".container");

  // Loop over the container to get each letter
  letterContainer.forEach(letter => {
    const letter = document.querySelectorAll(".letter");
  });
}

animateLetters();
