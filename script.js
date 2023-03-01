const GAME_RULE = { 1: "ROCK", 2: "PAPER", 3: "SCISSORS" };

function getComputerChoice() {
  return GAME_RULE[Math.floor(Math.random() * 3) + 1];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let result;
  switch (true) {
    case playerSelection === computerSelection:
      console.log("Its' a tie!!");
      result = 0;
      break;
    case (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK"):
      console.log(
        `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
      );
      result = 1;
      break;
    case (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
      (playerSelection === "ROCK" && computerSelection === "PAPER"):
      console.log(
        `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
      );
      result = 2;
      break;
    default:
      console.log("Well that's awkward!");
      result = -1;
      break;
  }
  return result;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors? ").toUpperCase();
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === 1) playerWins++;
    else if (roundResult === 2) computerWins++;
  }

  if (playerWins === 0 && computerWins === 0) console.log("It's a tie folks!!");
  else if (playerWins > computerWins)
    console.log("You have won the Game, Congrautlations!!!");
  else if (computerWins > playerWins)
    console.log("You Lose!, Better luck next time!!! ");
}

game();
