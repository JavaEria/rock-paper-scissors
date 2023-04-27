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

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function showWinner(playerWins, computerWins) {
  if (playerWins === 0 && computerWins === 0) console.log("It's a tie folks!!");
  else if (playerWins > computerWins)
    finalDiv.textContent += "\n You have won the Game, Congratulations!!!";
  else if (computerWins > playerWins)
    finalDiv.textContent += "\n You Lose!, Better luck next time!!!";
}

function playRound(playerSelection, computerSelection) {
  let result;
  switch (true) {
    case playerSelection === computerSelection:
      result = 0;
      console.log("Its' a tie!!");
      resultDiv.textContent = "Its' a tie!!";
      break;
    case (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK"):
      result = 1;
      console.log(
        `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
      );
      resultDiv.textContent = `${capitalize(
        playerSelection
      )} beats ${capitalize(computerSelection)}`;
      break;
    case (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "ROCK" && computerSelection === "PAPER"):
      result = 2;
      resultDiv.textContent = `${capitalize(
        computerSelection
      )} beats ${capitalize(playerSelection)}`;
      console.log(
        `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
      );
      break;
    default:
      result = -1;
      console.log("Well that's awkward!");
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

//game();
