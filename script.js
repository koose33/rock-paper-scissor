// computer gets random number
// if the random number is less than .33, return "rock"
// else if it's less than .66, return "paper"
// else return "scissors"

function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber <= .33) {
        return "rock";
    } else if (randomNumber <= .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

//human writes their choice of rock, paper, scissors
//
function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors")
    return humanChoice;
}

let humanScore = 0
let computerScore = 0

// if humanChoice is the same as computerChoice, log "It's a tie!"
// no points
// if humanChoice is rock and computerChoice is scissors, log "You win!"
// 1 point added to humanScore
// if humanChoice is paper and computerChoice is rock, log "You win!"
// 1 point added to humanScore
// if humanChoice is scissors and computerChoice is paper, log "You win!"
// 1 point added to humanScore
// else, log "You lose!"
// 1 point added to computerScore

function playRound(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore = humanScore + 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore = humanScore + 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore = humanScore + 1;
    } else {
        console.log("You lose!");
        computerScore = computerScore + 1;
    }
    console.log(humanScore, computerScore);
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);

console.log(humanSelection)
console.log(computerSelection)