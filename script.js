function getComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let computerSelection = Math.floor(Math.random() * choices.length);
  computerSelection = choices[computerSelection];
  console.log(computerSelection);
  return computerSelection;
}

function roundLost() {
  console.log("You lost.");
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    computerSelection == "paper"
      ? roundLost()
      : computerSelection == "scissor"
      ? roundWon()
      : computerSelection == "rock"
      ? roundDraw()
      : console.log("Invalid round.");
  }
}

function game() {
  for (i = 1; i < 5; i++) {
    playRound();
  }
}

playerSelection = "rock";

playRound(playerSelection, computerSelection);
