/* TO DO
1. set scores to zero!!
2. Count score
*/

// computer has 3 choices
let computerSelection;
let gamePlay;
let gameResult;

//computer chooses R, P or S randomly
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

computerSelection = getComputerChoice();
console.log(computerSelection);

let playerSelection;

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

// declare score variables
let computerScore = 0;
let playerScore = 0;

checkInput();
// if input is valid, play game
if (gamePlay === true) {
    playRound();
}

function playRound() {
    playerSelection = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();
    checkInput();
    if (computerSelection === playerSelection) {
    gameResult = "The computer chose " + computerSelection + " too. It's a tie!";
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        gameResult = "Computer played \"Rock\". The computer wins! You lose.";
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        gameResult = "Computer played \"Rock\". You win!";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        gameResult = "Computer played \"Paper\". The computer wins! You lose.";
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        gameResult = "Computer played \"Paper\". You win!";
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        gameResult = "Computer played \"Scissors\". You win!";
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        gameResult = "Computer played \"Scissors\". You win!"
    }
    return gameResult; 
}

console.log(gameResult);
console.log('Computer score = ' + computerScore + '\nYour score = ' + playerScore);


// game records score based on outcome of each game
// when either score = 5, end game
// declare winner, ask if play again
// reset game

let score = playerScore + computerScore
console.log(score);



// game();