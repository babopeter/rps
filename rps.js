// Generates the computer's choice based on a random number
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            computerChoice = "Rock";
            //display the computer's choice
            document.getElementById("displaychoice").innerHTML = computerChoice;
            console.log(`The computer's choice is ${computerChoice}.`); //print
            break;
        case 1:
            computerChoice = "Paper";
            //display the computer's choice
            document.getElementById("displaychoice").innerHTML = computerChoice;
            console.log(`The computer's choice is ${computerChoice}.`); //print
            break;
        case 2:
            computerChoice = "Scissors";
            //display the computer's choice
            document.getElementById("displaychoice").innerHTML = computerChoice;
            console.log(`The computer's choice is ${computerChoice}.`); //print
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
                //console.log(`It's a draw! You have both selected ${computerSelection}.`); //print
            } else if (computerSelection === "Paper") {
                roundOutcome = "Loss";
                //console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`); //print
            } else {
                roundOutcome = "Win";
                //console.log(`You Win! ${playerSelection} beats ${computerSelection}.`); //print
            }
            break;

        case "Paper":
            if (computerSelection === "Rock") {
                roundOutcome = "Win";
                //console.log(`You Win! ${playerSelection} beats ${computerSelection}.`); //print
            } else if (computerSelection === "Paper") {
                roundOutcome = "Draw";
                //console.log(`It's a draw! You have both selected ${computerSelection}.`); //print
            } else {
                roundOutcome = "Loss";
                //console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`); //print
            }
            break;

        case "Scissors":
            if (computerSelection === "Rock") {
                roundOutcome = "Loss"
                //console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`); //print
            } else if (computerSelection === "Paper") {
                roundOutcome = "Win";
                //console.log(`You Win! ${playerSelection} beats ${computerSelection}.`); //print
            } else {
                roundOutcome = "Draw";
                //console.log(`It's a draw! You have both selected ${computerSelection}.`); //print
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
    if (playerScore >= 2 || computerScore >= 2) {gameOver = true};
}

function countScore() {
    if (roundOutcome === "Win") {
        playerScore++;
        console.log(`Player: ${playerScore}, computer: ${computerScore}`);
        document.getElementById("displayscorep").innerHTML = playerScore;
    } else if (roundOutcome === "Loss") {
        computerScore++;
        console.log(`Player: ${playerScore}, computer: ${computerScore}`);
        document.getElementById("displayscorec").innerHTML = computerScore;
    } else {
        drawCounter++;
    }
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

            console.log(button.id); // log player's choice
            let playerSelection = button.id;
            let computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);
            countScore();
            checkWinner();
            if(gameOver){
                console.log('The game is over');
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

game();
