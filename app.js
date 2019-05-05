let userScore = 0;
let computerScore = 0;
const userScoreTwo = document.getElementById("user-score");
const computerScoreTwo = document.getElementById("computer-score");
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
  if (letter === "p") return "paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScoree++;
  userScoreTwo.innerHTML = userScore;
  computerScoreTwo.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord}. You win!`;
  const winClass = document.getElementById(userChoice);
  winClass.classList.add("green-glow");
  setTimeout(() => winClass.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreTwo.innerHTML = userScore;
}
