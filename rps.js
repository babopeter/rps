function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    //console.log(`Random number ${computerChoice} was generated`);
    switch (computerChoice) {
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

    switch (playerSelection) {
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
    /* for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
        alert(`Welcome to round ${roundNumber} of Rock, Paper, Scissors!`);
        let playerSelection = prompt(`Make your choice and type it here:`);
        console.log(`\nTurn ${roundNumber} outcome:`);
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (roundOutcome === "Win") {
            playerScore++;
        } else if (roundOutcome === "Loss") {
            computerScore++;
        } else {
            drawCounter++;
        }
    } */

    let roundNumber = 1;
    //alert(`Welcome to round ${roundNumber} of Rock, Paper, Scissors!`);
    //let playerSelection = prompt(`Make your choice and type it here:`);


    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            let playerSelection = button.id;
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            if (roundOutcome === "Win") {
                playerScore++;
            } else if (roundOutcome === "Loss") {
                computerScore++;
            } else {
                drawCounter++;
            }
            printScore();
            checkWinner();
        });
    });

    //console.log(`\nTurn ${roundNumber} outcome:`);

}

let roundOutcome = "";
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let validSelection = false;
game();

