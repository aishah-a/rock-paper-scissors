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

function checkWinner(choiceP, choiceC) {
    if (computerSelection === playerSelection) {
    return "The computer chose " + computerSelection + " too. It's a tie!";
    } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')) {
    return 'Computer played "' + computerSelection + '". The computer wins! You lose!';
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
    return 'Computer played "' + computerSelection + '".  You win!';
    }
}

function game () {
    checkInput(playerSelection);
    console.log(gamePlay);
    if (gamePlay = true) {
        checkWinner(playerSelection, computerSelection);
        let roundWinner = (checkWinner());
        console.log(roundWinner);
    }

}

const computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let gamePlay;
game();

// get choices
// check input
// if input valid and gamplay = true, check winner
// print winner

