let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
   let humanChoice = prompt("choose your weapon! (scissors, paper, rock)").toLowerCase();
         if (humanChoice === "scissors") {
            let humanChoice = "scissors"
            return humanChoice
        } else if (humanChoice === "paper") {
            let humanChoice = "paper"
            return humanChoice
        } else if (humanChoice === "rock") {
            let humanChoice = "rock"
            return humanChoice
        } else if (humanChoice != "scissors","paper","rock") {
            alert(`the weapon you chose is ${humanChoice}, which is invalid! try again!`);
            return getHumanChoice();
        }
 }

let humanChoice = (getHumanChoice())

console.log(`you chose ${humanChoice}!`);

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3).toString();
        if (computerChoice === "0") {
            let computerChoice = "scissors"
            return computerChoice
        } else if (computerChoice === "1") {
            let computerChoice = "paper"
            return computerChoice
        } else if (computerChoice === "2") {
            let computerChoice = "rock"
            return computerChoice
        }
};
let computerChoice = (getComputerChoice());

console.log(`computer chose ${computerChoice}!`);
