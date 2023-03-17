function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(computerChoice);
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt('Please select "Rock", "Paper" or "Scissors.').toLowerCase();
    return playerChoice;
}

function playRound(choiceC, choiceP) {
    if (computerSelection === playerSelection) {
    console.log("The computer chose " + computerSelection + " too. It's a tie!");
    return 'tie'
    } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')) {
    console.log('Computer played "' + computerSelection + '". The computer wins! You lose!');
    return 'computer'
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
    console.log('Computer played "' + computerSelection + '". You win!');
    return 'player'
    }
}

/*
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let roundWinner = playRound();
let playerScore = 0;
let computerScore = 0;
checkWinner();
computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
roundWinner = playRound();
checkWinner();
*/

playerScore = 0;
computerScore = 0;
let computerSelection;
let playerSelection;
let roundWinner;


function game() {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    roundWinner = playRound();
    checkWinner();
}


function checkWinner() { 
    if (roundWinner === 'player') {
        ++playerScore;
    } else if (roundWinner === 'computer') {
        ++computerScore;
    }
    console.log('Scores: \n Player: ' + playerScore + '\n Computer: ' + computerScore );
}

for (let i = 0; i < 5; i++) {
    game();
}