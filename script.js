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
    console.log('let\'s play');
    getChoice();
}

let gameResult;
if (computerSelection == playerSelection) {
    gameResult = "The computer chose " + computerSelection + " too. It's a tie!";
};

function getChoice(computerSelection, playerSelection) {
    return computerSelection, playerSelection ; {
    }
}



    /*
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        gameResult = "Computer played \"Rock\". The computer wins! You lose."
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return "Computer played \"Rock\". You win!"
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return "Computer played \"Paper\". The computer wins! You lose."
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return "Computer played \"Paper\". You win!"
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return "Computer played \"Scissors\". You win!"
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return "Computer played \"Scissors\". You win!"
    }
    else if (computerSelection == playerSelection) {
        return "The computer chose " + computerSelection + " too. It's a tie!";
    }
}
*/
// game shows computer selection
// game selects winner
// game records score
// game resets
// after 5 games game declares winner
