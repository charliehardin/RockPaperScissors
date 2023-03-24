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
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return paperBeatsRock;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "Scissors") {
        return rockBeatsScissors;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors'){
        return scissorsBeatsPaper;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock'){
        return tie;
    }
}

console.log(playGame(playerSelection, computerSelection));


