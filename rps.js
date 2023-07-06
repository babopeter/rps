// Generates the computer's choice based on a random number
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

// Evaluates the player's choice against the computer's choice
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") {
                roundOutcome = "Draw";
            } else if (computerSelection === "Paper") {
                roundOutcome = "Loss";
            } else {
                roundOutcome = "Win";
            }
            break;

        case "Paper":
            if (computerSelection === "Rock") {
                roundOutcome = "Win";
            } else if (computerSelection === "Paper") {
                roundOutcome = "Draw";
            } else {
                roundOutcome = "Loss";
            }
            break;

        case "Scissors":
            if (computerSelection === "Rock") {
                roundOutcome = "Loss"
            } else if (computerSelection === "Paper") {
                roundOutcome = "Win";
            } else {
                roundOutcome = "Draw";
            }
            break;
    }
    document.getElementById("roundoutcome").innerHTML = roundOutcome;
    return roundOutcome;
}

// print the final score and win/loss message
function printStatus() {
    gameStatus = "Game over! Click a button to start a new game!";
    document.getElementById("gamestatus").innerHTML = gameStatus;

}

// check if the player or computer reached the designated score
function checkWinner() {
    if (playerScore >= 3 || computerScore >= 3) { gameOver = true };
}

function countScore() {
    if (roundOutcome === "Win") {
        playerScore++;
    } else if (roundOutcome === "Loss") {
        computerScore++;
    } else {
        drawCounter++;
    }
}

function printScore() {
    document.getElementById("displayscorep").innerHTML = playerScore;
    document.getElementById("displayscorec").innerHTML = computerScore;
}

function printComputerChoice() {
    document.getElementById("displaychoice").innerHTML = computerChoice;
}

function printRoundNumber() {
    document.getElementById("displayrounds").innerHTML = roundNumber;
}

// reset variables to start a new game
function endGame() {
    roundNumber = 1;
    roundOutcome = "";
    playerScore = 0;
    computerScore = 0;
    drawCounter = 0;
    validSelection = false;
    gameOver = false;
    gameStatus = "";
    playerScore = "";
    computerScore = "";
    roundOutcome = "";
}

function game() {

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // reset score and game status at round start
            document.getElementById("displayscorep").innerHTML = playerScore;
            document.getElementById("displayscorec").innerHTML = computerScore;
            document.getElementById("gamestatus").innerHTML = gameStatus;

            printRoundNumber();
            let playerSelection = button.id;
            let computerSelection = getComputerChoice();
            printComputerChoice();
            playRound(playerSelection, computerSelection);
            countScore();
            printScore();
            checkWinner();
            roundNumber++;
            if (gameOver) {
                printStatus();
                endGame();
            };
        });
    });
}

let roundNumber = 1;
let roundOutcome = "";
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let validSelection = false;
let gameOver = false;
const buttons = document.querySelectorAll('button');
let gameStatus = "";
let computerChoice = 0;

game();

// to do: 
// clean up and simplify
// create a nice UI