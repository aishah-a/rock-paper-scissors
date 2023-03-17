function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
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

function playRound(choiceP, choiceC) {
    if (computerSelection === playerSelection) {
    console.log("The computer chose " + computerSelection + " too. It's a tie!");
    return 'tie';
    } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')) {
    console.log('Computer played "' + computerSelection + '". The computer wins! You lose!');
    return 'computer';
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
    console.log('Computer played "' + computerSelection + '". You win!');

    return 'player';
    }
}

function game () {
    checkInput(playerSelection);
    if (gamePlay = true) {
        playRound(playerSelection, computerSelection);
        let roundWinner = (playRound());
        if (roundWinner === 'player') {
            ++playerScore;
        } else if (roundWinner === 'computer') {
            ++computerScore;
        }
    }

}

let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let gamePlay;
game();
console.log('Scores: \n Player: ' + playerScore + '\n Computer: ' + computerScore );

// get choices
// check input
// if input valid and gamplay = true, check winner
// print winner
