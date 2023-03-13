// set scores to zero!!


// computer has 3 choices
const choice = ['rock', 'paper', 'scissors'];
let gamePlay;
let computerSelection;

//computer chooses R, P or S randomly
function getComputerSelection() {
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
}
// get computer choice 
getComputerSelection();

// game asks for input, player chooses R, P or S, make input case insensitive
let playerSelection = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();
console.log(playerSelection); // remove

//check if player input is valid
function checkInput(playerInput) {
    if (playerSelection === 'rock'||
    playerSelection === 'paper' ||
    playerSelection === 'scissors') {
    console.log("ready!"); // remove
    gamePlay = true;
    } else if (playerSelection !== 'rock'||
        playerSelection !== 'paper' ||
        playerSelection !== 'scissors') {
        prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase(); // change to error message
        gamePlay = false;
    }
}
checkInput();

/* if (gamePlay === true) {
    playGame();
}
else 

/*




function playGame(computerSelection, playerSelection) {
    if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("Computer played \"Rock\". The computer wins! You lose.");
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        console.log("Computer played \"Rock\".You win!");
    }
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log("Computer played \"Paper\". The computer wins! You lose.");
    }
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        console.log("Computer played \"Paper\".You win!");
    }
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        console.log("Computer played \"Scissors\".You win!");
    }
    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log("Computer played \"Scissors\".You win!");
    }
    else if (computerSelection === playerSelection) {
        console.log("Draw.");
    }
}
*/

// game shows computer selection
// game selects winner
// game records score
// game resets
// after 5 games game declares winner