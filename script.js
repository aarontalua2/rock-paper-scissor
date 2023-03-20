function getComputerChoice() {
  // Randomly select a choice for computer
  // -- floor/random generates numbers 0-2 and uses them as index to get value from "choices" array.
  let computerSelection = Math.floor(Math.random() * choices.length);
  computerSelection = choices[computerSelection];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  // Result strings to reduce redundancy, as these will be used multiple times.
  let won = `You won, ${playerSelection} beats ${computerSelection}.`;
  let lost = `You lost, ${computerSelection} beats ${playerSelection}.`;
  let draw = `It's a draw. You are both ${playerSelection}.`;

  // Checks player selection and then
  // Checks computer selection and prints results, then add depending on the result.
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          console.log(draw);
          break;
        case "paper":
          console.log(lost);
          computerScore++;
          break;
        case "scissor":
          console.log(won);
          playerScore++;
          break;
      }
      break;

    case "paper":
      switch (computerSelection) {
        case "paper":
          console.log(draw);
          break;
        case "scissor":
          console.log(won);
          playerScore++;
          break;
        case "rock":
          console.log(lost);
          computerScore++;
      }
      break;

    case "scissor":
      switch (computerSelection) {
        case "scissor":
          console.log(draw);
          break;
        case "rock":
          console.log(lost);
          computerScore++;
          break;
        case "paper":
          console.log(won);
          playerScore++;
          break;
      }
      break;
  }
}

function game() {
  // Introduction
  console.log(
    `Welcome to my rock-paper-scissor javascript game. Please choose between ${choices} to start the round.\n`
  );

  // Loop to play 5 rounds.
  for (i = 1; i <= 5; i++) {
    playerSelection = prompt(`Please choose "rock", "paper", or "scissor"`);
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  console.log(
    `Thank you for playing the game. The final final score is: \n
    You: ${playerScore} vs Computer: ${computerScore}.`
  );
}

// Global variables and function calls -- basically using the program.
const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

game();
