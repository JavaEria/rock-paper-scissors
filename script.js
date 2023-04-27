const GAME_RULE = ["ROCK", "PAPER", "SCISSORS"];
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");
const finalDiv = document.querySelector("#final");

rockButton.addEventListener("click", () => {
  game("ROCK");
});
paperButton.addEventListener("click", () => {
  game("PAPER");
});
scissorsButton.addEventListener("click", () => {
  game("SCISSORS");
});

function getComputerChoice() {
  return GAME_RULE[Math.floor(Math.random() * 3)];
}

function showWinner(playerWins, computerWins) {
  const winnerContent = document.createElement("p");
  if (playerWins === 0 && computerWins === 0)
    winnerContent.textContent = "It's a tie folks!!";
  else if (playerWins > computerWins)
    winnerContent.textContent += "You have won the Game, Congratulations!!!";
  else if (computerWins > playerWins)
    winnerContent.textContent += "You Lose!, Better luck next time!!!";
  finalDiv.appendChild(winnerContent);
}

function playRound(playerSelection, computerSelection) {
  let result;
  switch (true) {
    case playerSelection === computerSelection:
      result = 0;
      resultDiv.textContent = "Its' a tie!!";
      break;
    case (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK"):
      result = 1;
      resultDiv.textContent = `${playerSelection} beats ${computerSelection}`;
      break;
    case (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "ROCK" && computerSelection === "PAPER"):
      result = 2;
      resultDiv.textContent = `${computerSelection} beats ${playerSelection}`;
      break;
    default:
      result = -1;
      resultDiv.textContent = "Well that's awkward!";
      break;
  }
  return result;
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  if (roundResult === 1) playerWins++;
  else if (roundResult === 2) computerWins++;
  finalDiv.textContent = `Player Score: ${playerWins} Computer Score: ${computerWins}`;
  if (playerWins === 5 || computerWins === 5) {
    showWinner(playerWins, computerWins);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}
