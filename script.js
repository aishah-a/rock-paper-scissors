/* TO DO
1. set scores to zero!!
2. Force valid input
3. Count score
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

// computer chooses
computerSelection = getComputerChoice();
console.log(computerSelection);

// game asks for input, player chooses R, P or S, make input case insensitive
let playerSelection = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();

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

// if input is valid, play game
checkInput();
if (gamePlay === true) {
    playRound();
}

function playRound() {
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

playRound();
console.log(gameResult);



/*

game shows computer selection
game selects winner
game records score
game resets
after 5 games game declares winner
*/