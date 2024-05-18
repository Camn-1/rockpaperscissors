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
    
    return Math.floor(Math.random() * 3);

    // console.log(x); Used to ensure that x is a different value with each function call.
}
 
let humanSelection, computerSelection;

function handleClick(event) {
    const humanSelectionNumber = +(event.target.id);

    const computerSelectionNumber = getComputerChoice();
    const choices = ['Rock', 'Paper', 'Scissors'];
    const humanSelection = choices[humanSelectionNumber];
    const computerSelection = choices[computerSelectionNumber];

    const result = playRound(humanSelection, computerSelection);
    updateResult(result);

    if (humanScore === 5) {
        announceWinner('Human');
    } else if (computerScore === 5) {
        announceWinner('Computer');
    }

    // Update the score display
    updateScoreDisplay();
}

function announceWinner(winner) {
    alert(`${winner} wins the game!`);
    // You can reset the scores here if needed
    humanScore = 0;
    computerScore = 0;
}

function updateResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
}

function updateScoreDisplay() {
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// Initialize the user selection buttons and allow interactivity

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button.choice");
    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });
});


// This function simulates a round of Rock, Paper, Scissors and tallies wins.

function playRound(humanSelection, computerSelection) {
    if (humanSelection == "Paper" && computerSelection == "Rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
    } else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        humanScore++;
        return "You win! Rock beats Scissors.";
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
        humanScore++;
        return "You win! Scissors beats Paper.";
    } else if (humanSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
    } else if (humanSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper.";
    } else if (humanSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    } else {
        return "Aww it's a tie, no winners";
    }
}