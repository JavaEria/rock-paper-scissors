console.log("Let's play rock paper scissors!");

const GAME_RULE = { 1: "ROCK", 2: "PAPER", 3: "SCISSORS" };

function getComputerChoice() {
  return GAME_RULE[Math.floor(Math.random() * 3) + 1];
}
