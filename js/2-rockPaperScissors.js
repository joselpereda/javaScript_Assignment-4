// GLOBAL VARIABLES
let userChoice;
let computerChoice;
let choices = ["ROCK","PAPER","SCISSORS"];

// ---------------------------------------------------------------------------------------------------------
// Function to prompt user for choice: 1 rock, 2 paper, 3 scissors
function promptUser () {
    let getUserChoice;

    do {
        getUserChoice = parseInt(prompt("Make selection: 1 for Rock, 2 for Paper, or 3 for Scissors "));
    } while(!(getUserChoice != 1 || getUserChoice != 2 || getUserChoice != 3))
    
    if (getUserChoice == 1) {
        return "ROCK";
    } else if (getUserChoice == 2){
        return "PAPER";
    } else {
        return "SCISSORS"
    }
}

// ---------------------------------------------------------------------------------------------------------
// Function to determine computer choice
function computerSelection(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// ---------------------------------------------------------------------------------------------------------
do {
    // Prompt user for selection
    userChoice = promptUser();
    // Determine computer selection
    computerChoice = computerSelection(choices);

    if (userChoice === computerChoice) {
        alert ("It's a tie! Sorry, nobody won!");
    } else if (((userChoice === "SCISSORS") && (computerChoice === "PAPER")) || ((userChoice === "PAPER") && (computerChoice === "ROCK")) || ((userChoice === "ROCK") && (computerChoice === "SCISSORS"))) {
        alert("The HUMAN won!");
    } else {
        alert("The COMPUTER won! :(")
    }

} while (userChoice === computerChoice)