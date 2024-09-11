let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
   let humanChoice = prompt("choose your weapon! (scissors, paper, rock)").toLowerCase();
         if (humanChoice === "scissors") {
            let humanChoice = "scissors"
            console.log(`you chose ${humanChoice}!`);
            return humanChoice
        } else if (humanChoice === "paper") {
            let humanChoice = "paper"
            console.log(`you chose ${humanChoice}!`);
            return humanChoice
        } else if (humanChoice === "rock") {
            let humanChoice = "rock"
            console.log(`you chose ${humanChoice}!`);
            return humanChoice
        } else if (humanChoice != "scissors","paper","rock") {
            alert(`the weapon you chose is ${humanChoice}, which is invalid! try again!`);
            return getHumanChoice();
        }
 };

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3).toString();
        if (computerChoice === "0") {
            let computerChoice = "scissors"
            console.log(`computer chose ${computerChoice}!`);
            return computerChoice
        } else if (computerChoice === "1") {
            let computerChoice = "paper"
            console.log(`computer chose ${computerChoice}!`);
            return computerChoice
        } else if (computerChoice === "2") {
            let computerChoice = "rock"
            console.log(`computer chose ${computerChoice}!`);
            return computerChoice
        }
};

function playGame() {
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound (humanSelection, computerSelection);

        function playRound(humanChoice, computerChoice)
        {
            if (humanChoice === computerChoice) {
                console.log(`| its a tie! score is unchanged |`)
    } else if (humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "rock" && computerChoice === "scissors") 
            {   humanScore ++
                console.log(`you win the round! ${humanChoice} beats ${computerChoice}`)
                console.log(`your score: ${humanScore} | computer's score: ${computerScore}`)
                
    } else if (humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "rock" && computerChoice === "paper") 
            { computerScore ++
                console.log(`you lose the round! computer chose ${computerChoice} which beats ${humanChoice}`)
                console.log(`your score: ${humanScore} | computer's score: ${computerScore}`)
            }
        }
    }
};

playGame ();

function finalScore() {
    if (humanScore === computerScore) {
        console.log(`game is a draw! -_-`)
        console.log(`final scores | your score: ${humanScore} | computer's score: ${computerScore}`)
    } else if (humanScore > computerScore) {
        console.log(`you win the game! :)`)
        console.log(`final scores | your score: ${humanScore} | computer's score: ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`computer wins the game :(`)
        console.log(`final scores | your score: ${humanScore} | computer's score: ${computerScore}`)
    }
};

finalScore();