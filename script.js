// Rock Paper Scissors Game

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice (choices) {
    const randomChoice = Math.floor(Math.random() * choices.length);
    computerChose = choices[randomChoice];

    return computerChose;
}

let computerSelection = getComputerChoice(choices);
console.log(`Computer Has Chosen ${computerSelection}`);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const selectedRock = () => playGame('rock', computerSelection);
const selectedPaper = () => playGame('paper', computerSelection);
const selectedScissors = () => playGame('scissors', computerSelection);

rock.addEventListener('click', selectedRock);
paper.addEventListener('click', selectedPaper);
scissors.addEventListener('click', selectedScissors);

let results = document.querySelector('#scores');
let gameOverMessage = document.querySelector('#gameOver');

 function resetComputer(){
        computerSelection = getComputerChoice(choices);
        console.log(computerSelection);
    }


function playGame (pChoice, computerSelection) { 
    function playerLoses () {
        alert(`You Lose! ${computerSelection} beats ${pChoice}`);
        computerScore++;
        results.textContent = `Your Score: ${playerScore} 
                               Computer Score: ${computerScore}`;
        resetComputer();
    }
    function playerWins () {
        alert(`You Win! ${pChoice} beats ${computerSelection}`);
        playerScore++;
        results.textContent = `Your Score: ${playerScore} 
                               Computer Score: ${computerScore}`;
        resetComputer();
    }
    function tieGame () {
        alert('Tie!');
        results.textContent = `Your Score: ${playerScore} 
                               Computer Score: ${computerScore}`;
        resetComputer();
    }
    function endGame() {
        return;
    }

    pChoice === 'rock' && computerSelection === 'paper' ? playerLoses()
        : pChoice === 'rock' && computerSelection === 'rock' ? tieGame()
        : pChoice === 'paper' && computerSelection === 'paper' ? tieGame()
        : pChoice === 'scissors' && computerSelection === 'scissors' ? tieGame()
        : pChoice === 'rock' && computerSelection === 'scissors' ? playerWins()
        : pChoice === 'paper' && computerSelection === 'scissors' ? playerLoses()
        : pChoice === 'paper' && computerSelection === 'rock' ? playerWins()
        : pChoice === 'scissors' && computerSelection === 'paper' ? playerWins()
        : pChoice === 'scissors' && computerSelection === 'rock' ? playerLoses()
        : endGame()
    
    if (playerScore == 5 || computerScore == 5){
        gameOverMessage.textContent = "Game Over!"
       if (playerScore > computerScore){
        gameOverMessage.textContent = "Game Over, You Win!"
        } else if (computerScore > playerScore){
            gameOverMessage.textContent = "Game Over, You Lose!"
        }
    }
    
    console.log(playerScore, computerScore);
}


