/* TO DO
1. set scores to zero!!
2. Force valid input
3. Count score
*/

// computer has 3 choices
let computerSelection;
let gamePlay;

//computer chooses R, P or S randomly
function getComputerSelection() {
    const choice = ['rock', 'paper', 'scissors'];
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
}

// computer chooses
getComputerSelection(computerSelection);

// show computer choice
console.log('computer chose ' + computerSelection);

// game asks for input, player chooses R, P or S, make input case insensitive
let playerSelection = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();

// show player choice
console.log('player chose ' + playerSelection);

//check if player input is valid
function checkInput(playerInput) {
    if (playerSelection === 'rock'||
    playerSelection === 'paper' ||
    playerSelection === 'scissors') {
    gamePlay = true;
    } else if (playerSelection !== 'rock'||
        playerSelection !== 'paper' ||
        playerSelection !== 'scissors') {
        gamePlay = false;
        playerSelection = prompt('To play, pick "Rock", "Paper" or "Scissors.').toLowerCase();
        return checkInput(playerInput);
    }
}

checkInput();
if (gamePlay === true) {
    playGame();
    console.log("Time to play");
}


function playGame(computer, player) {
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log("Computer played \"Rock\". The computer wins! You lose.");
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log("Computer played \"Rock\".You win!");
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log("Computer played \"Paper\". The computer wins! You lose.");
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log("Computer played \"Paper\".You win!");
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log("Computer played \"Scissors\".You win!");
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log("Computer played \"Scissors\".You win!");
    }
    else if (computerSelection == playerSelection) {
        console.log("Draw.");
    }
}

// game shows computer selection
// game selects winner
// game records score
// game resets
// after 5 games game declares winner
