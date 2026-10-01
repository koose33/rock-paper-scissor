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

// user writes their choice of rock, paper, scissors

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors")
    return humanChoice.toLowerCase();
}

function playGame() {
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
        console.log(humanChoice, computerChoice);
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
    const humanSelection1 = getHumanChoice()
    const computerSelection1 = getComputerChoice()
    playRound(humanSelection1, computerSelection1);
    const humanSelection2 = getHumanChoice()
    const computerSelection2 = getComputerChoice()
    playRound(humanSelection2, computerSelection2);
    const humanSelection3 = getHumanChoice()
    const computerSelection3 = getComputerChoice()
    playRound(humanSelection3, computerSelection3);
}

playGame();