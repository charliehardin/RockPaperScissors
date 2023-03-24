// Rock Paper Scissors Game (Console Version)
const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice (choices) {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const rounds = [1, 2, 3, 4, 5];

rounds.forEach(() => {
    const computerChoice = getComputerChoice(choices);
    let computerSelection = computerChoice;
    console.log(`Computer Has Chosen ${computerChoice}`);
    const playerSelection = prompt("Enter Your Choice:");
    const result = playGame(playerSelection, computerSelection);
    console.log(result);
    alert(result);
    if (result.startsWith("You win!")) {
        playerScore++;
    } else if (result.startsWith("You lose!")) {
        computerScore++;
    }
});

console.log(`Player Score: ${playerScore}`);
alert(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);
alert(`Computer Score: ${computerScore}`);




function playGame (playerSelection, computerSelection) {
    const computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    const tie = "Tie!"
    const invalid = "Please enter a valid choice."

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return computerWins;
    } 
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "Scissors") {
        return playerWins;
    } 
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Rock'){
        return tie; 
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors'){
        return computerWins;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock'){
        return playerWins;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "Paper"){
        return tie;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "Rock"){
        return computerWins;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "Paper"){
        return playerWins;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "Scissors"){
        return tie;
    }
    else {
            return invalid;
        }
}





