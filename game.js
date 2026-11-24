/* rock: 0, paper: 1, scissors: 2 */

function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    if (roll === 0) {
        return "rock";
    }
    else if (roll === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Make a move. (Rock, paper, or scissors)");
    return userInput;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let choice = humanChoice.toLowerCase;
        if (choice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1
                console.log("You lose! Paper beats Rock");
            }
            else if (computerChoice === "scissors") {
                humanScore += 1
                console.log("You won! Rock beats scissors!");
            }
            else {
                humanScore += 1
                computerScore += 1
                console.log("Tie! Rock cannot beat rock!");
            }
        }
        else if (choice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1
                console.log("You win! Paper beats Rock!");
            }
            else if (computerChoice === "scissors") {
                computerScore += 1
                console.log("You lose! Scissors beats paper!");
            }
            else {
                humanScore += 1
                computerScore += 1
                console.log("Tie! Paper cannot beat paper!");
            }
        }
        else {
            if (computerChoice === "rock") {
                computerScore += 1
                console.log("You lose! Rock beats scissors!");
            }
            else if (computerChoice === "paper") {
                humanScore += 1
                console.log("You win! Scissors beats paper!");
            }
            else {
                humanScore += 1
                computerScore += 1
                console.log("Tie! Scissors cannot beat scissors!");
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won!");
    }
    else if (humanScore < computerScore) {
        console.log("Computer won!");
    }
    else {
        console.log("Tie!");
    }
}

playGame();