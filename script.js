// set scores to zero
// computer has 3 choices
const choice = ["rock", "paper", "scissors"];
// computer chooses R, P or S randomly

//get computer choice

function getComputerSelection(computerChoice) {
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    // console.log(computerSelection);
}


// game asks for input
// let playerSelection = prompt('Please select "Rock", "Paper" or "Scissors.');

// player chooses R, P or S
// check if player input is valid / if there is input
// make input case insensitive
// playerSelection.toLowerCase();



/*
function playGame(computerSelection, playerSelection) {
    if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("Computer played \"Rock\". The computer wins! You lose.");
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        console.log("Computer played \"Rock\".You win!");
    }
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log("Computer played \"Paper\". The computer wins! You lose.");
    }
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        console.log("Computer played \"Paper\".You win!");
    }
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        console.log("Computer played \"Scissors\".You win!");
    }
    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log("Computer played \"Scissors\".You win!");
    }
    else if (computerSelection === playerSelection) {
        console.log("Draw.");
    }
}

*/
/* 
if (playerSelection === "rock" || "paper" || "scissors") [
    playGame(playerSelection, computerSelection)
]
*/
// game shows computer selection
// game selects winner
// game records score
// game resets
// after 5 games, game declares winner