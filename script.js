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
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

computerSelection = getComputerChoice();
console.log(computerSelection)

let playerSelection = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();

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

// if input is valid, play game
checkInput();
if (gamePlay === true) {
    playRound();
}

function playRound() {
    if (computerSelection === playerSelection) {
    gameResult = "The computer chose " + computerSelection + " too. It's a tie!";
    } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')) {
    gameResult = 'Computer played "' + computerSelection + '". You win!';
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
    gameResult = 'Computer played "' + computerSelection + '". The computer wins! You lose.';
    } return gameResult; 
}

console.log(gameResult);


// declare score variables
// game records score based on outcome of each game
// when either score = 5, end game
// declare winner, ask if play again
// reset game