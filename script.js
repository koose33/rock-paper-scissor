// computer gets random number
// if the random number is less than .33, return "rock"
// else if it's less than .66, return "paper"
// else return "scissor"

function getComputerChoice() {
    let randomNumber = Math.random()
        if (randomNumber <= .33) {
            return "rock";
        } else if (randomNumber <= .66) {
            return "paper";
        } else {
            return "scissor";
        }
}

console.log(getComputerChoice())