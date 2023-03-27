playerScore = 0;
computerScore = 0;
let computerSelection;
let playerSelection;
let roundWinner;
let gameCount;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

/*
function getPlayerChoice(){
    let playerChoice = prompt('Please select "Rock", "Paper" or "Scissors".').toLowerCase();
    return playerChoice;
}
*/

function playRound(choiceC, choiceP) {
    if (computerSelection === playerSelection) {
    console.log('The computer chose " ' + computerSelection + '" too. It\'s a tie!');
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

function game() {
    computerSelection = getComputerChoice();
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

/* for (gameCount = 0; gameCount < 5; gameCount++) {
    game();
}

if (gameCount = 5) {
    console.log('Game over!');
    console.log('FINAL SCORE: \n Player: ' + playerScore + '\n Computer: ' + computerScore);
    if (playerScore > computerScore) {    
    console.log('You won the game! Well done!');
    } else if (playerScore < computerScore) {    
        console.log('The computer won the game! You lose.');
    } else if (playerScore === computerScore) {
        console.log('It\'s a tie!')
    }
}

*/


function checkInput(choiceP) {
    if (
    (playerSelection === 'rock') ||
    (playerSelection === 'paper') ||
    (playerSelection === 'scissors') ) {
        return true;
    } else if (
    (playerSelection !== 'rock') ||
    (playerSelection !== 'paper') ||
    (playerSelection !== 'scissors') ) {
    playerSelection = prompt('To play, pick "Rock", "Paper" or "Scissors".').toLowerCase();
    return checkInput(choiceP);
    }
}



/*
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
*/

// event listeners for buttons
const rock = document.getElementById("rockBtn").addEventListener("click", playRock);
const paper = document.getElementById("paperBtn").addEventListener("click", playPaper);
const scissors = document.getElementById("scissorsBtn").addEventListener("click", playScissors);



// functions for gameplay/choice selection

function playRock() {
    playerSelection = "rock";
    console.log("you played rock");
    return playerSelection;
}

function playPaper() {
    playerSelection = "paper";
    console.log("you played paper");
    return playerSelection;
}

function playScissors() {
    playerSelection = "scissors";
    console.log("you played scissors");
    return playerSelection;
}

