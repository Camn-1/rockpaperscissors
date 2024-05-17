/*
This is a Rock, Paper, Scissor program that is done completely in the console.

This will be played with a user vs the computer. The computer will decide
based on a function that picks a random option of the three choices. The user
will get to decide which of the three options they want to choose, based on 
a function. 

There will be a tally for the number of wins from the computer and user.
*/

// This function picks a random choice for the computer

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    // The x variable contains the value of the random choice for the computer.
    
    let x = Math.floor(Math.random() * 3);

    // console.log(x); Used to ensure that x is a different value with each function call.

    if (x == 0) {
        return "Rock";
    } 
    else if (x == 1) {
        return "Paper";
    } 
    else if (x == 2) {
        return "Scissors";
    }
    else {
        return "Computer is thinking!";
    }

}

// This function allows the user to pick their choice

function getHumanChoice() {
    let hand = prompt("Rock, Paper or Scissors?" );
    
    switch(hand.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            console.log("Please pick Rock, Paper, or Scissors.");
            break;
    }
}

// This function simulates a round of Rock, Paper, Scissors and tallies wins.

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else {
        console.log("Aww it's a tie, no winners");
    }
}

// These variables save the value of the functions to plug into the playRound function.

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(humanSelection);
// console.log(computerSelection); These logs just ensured the proper outputs are made.

// playRound(humanSelection, computerSelection); this was a test to ensure that the functions are done correctly.

function playGame() {
    let humanSelection, computerSelection;

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log(`Human won ${humanScore} times!`);
    } else {
        console.log(`Computer won ${computerScore} times!`);
    }
}

playGame();