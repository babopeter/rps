console.log("Game started");
// getComputerChoice
// The computer selects r, p, or s randomly
    // Rock - 0
    // Paper - 1
    // Scissors - 2

// playRound()
// Prompt user to choose either rock, paper or scissors
    // The choice should be case-insensitive
    // rock, Rock, rOCK should work

// Evaluate the user's choice against the computer's
// Output a different message based on the end result
// Include the computer's choice
    // Draw
    // You won
    // You lost

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    //console.log(`Random number ${computerChoice} was generated`);
    switch(computerChoice) {
        case 0:
            computerChoice = "Rock";
            console.log(`The computer's choice is ${computerChoice}.`);
            break;
        case 1:
            computerChoice = "Paper";
            console.log(`The computer's choice is ${computerChoice}.`);
            break;
        case 2:
            computerChoice = "Scissors";
            console.log(`The computer's choice is ${computerChoice}.`);
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") {
                roundOutcome = "Draw";
                console.log(`It's a draw! You have both selected ${computerSelection}.`);
            } else if (computerSelection === "Paper") {
                roundOutcome = "Loss";
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            } else {
                roundOutcome = "Win";
                console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            }
            break;

        case "Paper":
            if (computerSelection === "Rock") {
                roundOutcome = "Win";
                console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            } else if (computerSelection === "Paper") {
                roundOutcome = "Draw";
                console.log(`It's a draw! You have both selected ${computerSelection}.`);
            } else {
                roundOutcome = "Loss";
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            }
            break;

        case "Scissors":
            if (computerSelection === "Rock") {
                roundOutcome = "Loss"
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            } else if (computerSelection === "Paper") {
                roundOutcome = "Win";
                console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            } else {
                roundOutcome = "Draw";
                console.log(`It's a draw! You have both selected ${computerSelection}.`);
            }
            break;
    }
    return roundOutcome;
}

let playerSelection = prompt();
const computerSelection = getComputerChoice();
let roundOutcome = "";

playRound(playerSelection, computerSelection);