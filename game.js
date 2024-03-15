// variables
// humanScore
// computerScore

// array of rock, paper, or scissors


// humanChoice (human chooses)

//get random index
// computerChoice (random choice, determined by random index)

// winning conditions for human?
// humanChioce === rock && comupterChoice === scissors ||
//             === paper && computerChoice === scissors ||
//              === scissors && computerChoice === paper

// increase humanScore 
// log message "you won"
// if computer wins: increase computerscore and log "you lost"
// if tie (increase both scores or don't and log "you tied")

// window.alter() = see if user wants to play 

// window.confirm() = "do you want to play again"

// promt("choose rock paper or scisors") = get human input 
// eventually, use guards to get proper inputs 

let humanScore = 0
let computerScore = 0
const options = ["rock", "paper", "scissors"];



// check for invalid input 
if (!options.includes(userChoice)) {
    alert("You need to choose rock, paper, or scissors")
}

const randomIndex = Math.floor(Math.random()* options.length)
const computerChoice = options[randomIndex]
const userChoice = prompt("Enter rock, paper, or scissors").toLowerCase;


if (
    (userChoice === "rock" && computerChoice === "scissors") || 
    (userChoice === "paper" && computerChoice === "scissors") || 
    (userChoice === "scissors" && computerChoice === "paper")
 ) {
    alert("User wins!")
    humanScore++
} else if (userChoice === computerChoice) {
    alert("It's a tie!")
}
else {
    alert("You Lost!")
    computerScore++
}

alert(`Human: ${humanScore} | Computer: ${computerScore}`)