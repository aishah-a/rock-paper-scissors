function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();
    return playerChoice;
}

const computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let gamePlay;

function checkInput(choiceP) {
    if (
    (playerSelection === 'rock') ||
    (playerSelection === 'paper') ||
    (playerSelection === 'scissors') ) {
        gamePlay = true;
    } else if (
    (playerSelection !== 'rock') ||
    (playerSelection !== 'paper') ||
    (playerSelection !== 'scissors') ) {
    gamePlay = false;
    playerSelection = prompt('To play, pick "Rock", "Paper" or "Scissors.').toLowerCase();
    return checkInput(choiceP);
    }
}

checkInput(playerSelection);
console.log(gamePlay);

