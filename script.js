console.log("Let's play rock paper scissors!");

const GAME_RULE = { 1: "ROCK", 2: "PAPER", 3: "SCISSORS" };

function getComputerChoice() {
  return GAME_RULE[Math.floor(Math.random() * 3) + 1];
}

function playRound(playerSelection, computerSelection) {
  let result;
  switch (true) {
    case playerSelection === computerSelection:
      result = 0;
      break;
    case (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK"):
      result = 1;
      break;
    case (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "ROCK" && computerSelection === "PAPER"):
      result = 2;
      break;
    default:
      result = -1;
      break;
  }
  return result;
}
