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
        
        case "":
            console.log(`Please enter Rock, Paper or Scissors.`);
            break;

        default:
            console.log(`${playerSelection} is not a valid input. Please select Rock, Paper, or Scissors!`);
            break;  
    }
    return roundOutcome;
}

function validateInput(playerSelection) {
    let validSelection = false;
    if (playerSelection === "Rock" || playerSelection === "Paper" || playerSelection === "Scissors") {
        validSelection = true;
    } else {
        validSelection = false;
    }
}

function printScore() {
    console.log(`The final score is ${playerScore} : ${computerScore}`);
}

function checkWinner() {
    if (playerScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game, but feel free to try again!");
    } else {
        console.log("The game ends in a draw!");
    }
}

function game() {
    for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
        alert(`Welcome to round ${roundNumber} of Rock, Paper, Scissors!`);
        let playerSelection = prompt(`Make your choice and type it here:`);
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (roundOutcome === "Win") {
            playerScore++;
        } else if (roundOutcome === "Loss") {
            computerScore++;
        } else {
            drawCounter++;
        }
    }
    printScore();
    checkWinner();
}



let input = "";
let roundOutcome = "";
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
game();
