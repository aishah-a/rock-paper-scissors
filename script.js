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


const choiceBox = document.getElementById("choices");

function playRound(choiceC, choiceP) {
    if (computerSelection === playerSelection) {
    choiceBox.innerText = 'The computer chose " ' + computerSelection + '" too. It\'s a tie!';
    return 'tie'
    } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')) {
    choiceBox.innerText = 'Computer played "' + computerSelection + '". \n The computer wins the round! You lose!';
    return 'computer'
    } else if (
    (computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
    choiceBox.innerText = 'Computer played "' + computerSelection + '". \n You win the round!';
    return 'player'
    }
}

function game() {
    computerSelection = getComputerChoice();
    roundWinner = playRound();
    checkScore();
}

function checkScore() { 
    if (roundWinner === 'player') {
        ++playerScore;
    } else if (roundWinner === 'computer') {
        ++computerScore;
    }
 scorebox.innerText = 'Player: ' + playerScore + '\n Computer: ' + computerScore;
 checkWinner();
}

const scorebox = document.getElementById("score-count");

function checkWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        const finalResult = document.createElement("div");
        finalResult.innerText = 'Game over! \nFINAL SCORE: \n Player: ' + playerScore + '\n Computer: ' + computerScore;
        finalResult.setAttribute("id", "final-result");
        document.getElementById("scorebox").appendChild(finalResult);
        scorebox.remove();
        
        const finalWinner = document.createElement("div");
        finalWinner.setAttribute("id", "final-winner");
        if (playerScore > computerScore) {    
            finalWinner.innerText = 'You won the game! Well done!';
            } else if (playerScore < computerScore) {    
            finalWinner.innerText ='The computer won the game! You lose.';
            } else if (playerScore === computerScore) {
            finalWinner.innerText =('Both players got the same score. It\'s a tie!'); 
            }
        document.getElementById("scorebox").appendChild(finalWinner);
    }
}


// event listeners for buttons 1. play choice 2. commence gameplay 3. show score
const rock = document.getElementById("rockBtn").addEventListener("click", playRock);
document.getElementById("rockBtn").addEventListener("click", game);

const paper = document.getElementById("paperBtn").addEventListener("click", playPaper);
document.getElementById("paperBtn").addEventListener("click", game);

const scissors = document.getElementById("scissorsBtn").addEventListener("click", playScissors);
document.getElementById("scissorsBtn").addEventListener("click", game);


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

/*
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
*/

