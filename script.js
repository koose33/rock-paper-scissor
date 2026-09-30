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
    let humanChoice = prompt( "rock, paper, or scissors" )
    return humanChoice;
}

console.log(getComputerChoice())
console.log(getHumanChoice())