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
  computerScoreTwo.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )}${smallCompWord}. You lost.`;
  const winClass = document.querySelector("#userChoice");
  winClass.classList.add("red-glow");
  setTimeout(() => winClass.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )}${smallCompWord}. It's a draw.`;
  const winClass = document.querySelector("#userChoice");
  winClass.classList.add("gray-glow");
  setTimeout(() => winClass.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", () => game("r"));

  paper.addEventListener("click", () => game("p"));

  scissors.addEventListener("click", () => game("s"));
}
