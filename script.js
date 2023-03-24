// Rock Paper Scissors Game (Console Version)
const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice (choices) {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
const computerChoice = getComputerChoice(choices);
console.log(computerChoice);

let playerSelection = prompt("Enter Your Choice: ")
let computerSelection = computerChoice;

function playGame (playerSelection, computerSelection) {
    const paperBeatsRock = "Paper Beats Rock!";
    const rockBeatsScissors = "Rock Beats Scissors!";
    const scissorsBeatsPaper = "Scissors Beats Paper!"
    const tie = "Tie!"
    const invalid = "Please enter a valid choice."
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return paperBeatsRock;
    } 
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "Scissors") {
        return rockBeatsScissors;
    } 
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock'){
        return tie; 
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors'){
        return scissorsBeatsPaper;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock'){
        return paperBeatsRock;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "Paper"){
        return tie;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "Rock"){
        return rockBeatsScissors;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "Paper"){
        return scissorsBeatsPaper;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "Scissors"){
        return tie;
    }
    else {
            return invalid;
        }
}


console.log(playGame(playerSelection, computerSelection));




