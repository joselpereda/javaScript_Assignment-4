// GLOBAL VARIABLES
let userChoice;
let computerChoice;
let choices = ["ROCK","PAPER","SCISSORS"];
let getUserChoice;

// PROMPT USER FOR A CHOICE
// Change choice to all upper case to facilite valid input checking
do {
    getUserChoice = prompt("Select rock, paper or scissors:");
    userChoice = getUserChoice.toUpperCase();
} while (!((userChoice === "ROCK") || (userChoice === "PAPER") || (userChoice === "SCISSORS")));

// FUNCTION TO DETERMINE COMPUTER CHOICE
function computerSelection(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

// GET COMPUTER'S CHOICE
computerChoice = computerSelection(choices);

//FOR TESTING PURPOSES 
//console.log(`User choice: ${userChoice}`);
//console.log(`Computer choice: ${computerChoice}`);

// If user choice = computer choice, disply a tie message
// else if user choice = rock and computer choice = scissors, or user choice = scissors and computer choice = paper, or user choice = paper and computer choice = rock, human wins
// else, computer wins
if (userChoice === computerChoice) {
    alert("It's a tie! Sorry, nobody won!");
} else if (((userChoice === "SCISSORS") && (computerChoice === "PAPER")) || ((userChoice === "PAPER") && (computerChoice === "ROCK")) || ((userChoice === "ROCK") && (computerChoice === "SCISSORS"))) {
    alert("The HUMAN won!");
} else {
    alert("The COMPUTER won! :(")
}