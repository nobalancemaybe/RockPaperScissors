
let computerSelection = getComputerChoice(["rock", "paper", "scissors"]);
let playerSelection = prompt("rock paper or scissors", " ");
let computerScore = 0;
let playerScore = 0;

//random choice from array
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("rock paper or scissors", " ");
    if ( playerSelection == computerSelection ){
        console.log(playerSelection);
        return 0
    }
    else if ( playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        return 2
    }
    else{
        return 1
    }
}
game(playerSelection, computerSelection);
// play the game 5 times
function game() {
    for ( let i = 0; i < 5; i++) {
        console.log(i);
        console.log(playerScore);
        let result = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (result === 1){
            playerScore = playerScore++;
            console.log("player won");
            return "Round won";
        }
        else if (result === 2) {
            computerScore = computerScore++;
            console.log("computer won");
        }
        else {
            console.log("It's a tie")
            return "It's a tie";
        }
    }
}
