"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Corect!';

// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "Input a Number!";
    displayMessage("Input a Number!");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct!";
    displayMessage("Correct!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (window.matchMedia("(max-width: 600px)")) {
      document.querySelector(".number").style.width = "20rem";
    } else {
      document.querySelector(".number").style.width = "30rem";
    }

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess < secretNumber ? "Too Low!!!" : "Too High!!!";
      displayMessage(guess < secretNumber ? "Too Low!!!" : "Too High!!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost!";
      displayMessage("You lost!");
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#Ff0016";
      if (window.matchMedia("(max-width: 600px)")) {
        document.querySelector(".number").style.width = "20rem";
      } else {
        document.querySelector(".number").style.width = "30rem";
      }
      document.querySelector(".number").textContent = secretNumber;
    }
  }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low!!!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost!";
  //     score = 0;
  //     document.querySelector(".score").textContent = score;
  //     document.querySelector("body").style.backgroundColor = "#Ff0016";
  //     document.querySelector(".number").style.width = "30rem";
  //     document.querySelector(".number").textContent = secretNumber;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too heigh!!!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost!";
  //     score = 0;
  //     document.querySelector(".score").textContent = score;
  //     document.querySelector("body").style.backgroundColor = "#Ff0016";
  //     document.querySelector(".number").style.width = "30rem";
  //     document.querySelector(".number").textContent = secretNumber;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  if (window.matchMedia("(max-width: 600px)")) {
    document.querySelector(".number").style.width = "10rem";
  } else {
    document.querySelector(".number").style.width = "15rem";
  }
});
