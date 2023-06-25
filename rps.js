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
    console.log(computerChoice); // see the computer's choice
    switch(computerChoice) {
        case 0:
            console.log("The computer's choice is Rock");
            break;
        case 1:
            console.log("The computer's choice is Paper");
            break;
        case 2:
            console.log("The computer's choice is Scissors");
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(`The player's choice is ${playerSelection}`);
    //playerSelection = playerSelection.toUpperCase();

    switch(playerSelection) {
        case "ROCK":
            if (computerSelection === 0) {
                console.log("DRAW");
            } else if (computerSelection === 1) {
                console.log("LOSS")
            } else {
                console.log("WIN");
            }
            break;

        case "PAPER":
            if (computerSelection === 0) {
                console.log("WIN");
            } else if (computerSelection === 1) {
                console.log("DRAW")
            } else {
                console.log("LOSS");
            }
            break;

        case "SCISSORS":
            if (computerSelection === 0) {
                console.log("LOSS");
            } else if (computerSelection === 1) {
                console.log("WIN")
            } else {
                console.log("DRAW");
            }
            break;
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
//console.log(`The computer has selected ${computerSelection}`);

playRound(playerSelection, computerSelection);