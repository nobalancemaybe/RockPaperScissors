
let computerSelection = getComputerChoice(["rock", "paper", "scissors"]);
let playerSelection = prompt("rock paper or scissors", " ");
//let computerScore = 0;
//let playerScore = 0;

//random choice from array
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function playRound(playerSelection, computerSelection) {
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
    for ( let i = 0; i = 5; i++) {
        let computerScore = 0;
        let playerScore = 0;
        console.log(playerScore);
        let result = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (result === 1){
            let playerScore = ++playerScore;
            console.log("playerWon");
            return "Round won";
        }
        else if (result === 2) {
            let computerScore = ++computerScore;
            console.log(computerScore);
        }
        else {
            return "It's a tie";
        }
        console.log(i);
        return
    }
}
