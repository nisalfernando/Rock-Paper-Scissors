let userScore = 0;
let computerScore = 0;
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
  const choice = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "rock";
}
