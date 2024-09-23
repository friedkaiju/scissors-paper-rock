let humanScore = 0;
let computerScore = 0;

const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const resultContainer = document.querySelector("#results")


scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    resultParagraph.textContent += `you chose ${humanChoice}! `
    playRound("scissors", getComputerChoice());
});
paper.addEventListener("click", () => {
    humanChoice = "paper";
    resultParagraph.textContent += `you chose ${humanChoice}! `
    playRound("paper", getComputerChoice());
});
rock.addEventListener("click", () => {
    humanChoice = "rock";
    resultParagraph.textContent += `you chose ${humanChoice}! `
    playRound("rock", getComputerChoice());
});
/* add an event listener to the buttons that call the playround function with the correct player selection*/

const resultParagraph = document.querySelector("#results");
    const resultParagraphText = document.createElement("p")
resultParagraph.appendChild(resultParagraphText);

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3).toString();
        if (computerChoice === "0") {
            let computerChoice = "scissors"
            resultParagraph.textContent += `computer chose ${computerChoice}! `;
            return computerChoice
        } else if (computerChoice === "1") {
            let computerChoice = "paper"
            resultParagraph.textContent += `computer chose ${computerChoice}! `;
            return computerChoice
        } else if (computerChoice === "2") {
            let computerChoice = "rock"
            resultParagraph.textContent += `computer chose ${computerChoice}! `;
            return computerChoice
        }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice)
{
     if (humanScore === 5 || computerScore === 5) {
                declareWinner();
    } else if (humanChoice === computerChoice) {
            resultParagraph.textContent += '| its a tie! score is unchanged | '
    } else if (humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "rock" && computerChoice === "scissors") 
    {   humanScore ++
            resultParagraph.textContent += `you win the round! ${humanChoice} beats ${computerChoice} `
            resultParagraph.textContent += `your score: ${humanScore} | computer's score: ${computerScore} `
                
    } else if (humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "rock" && computerChoice === "paper") 
        { computerScore ++
         resultParagraph.textContent += `you lose the round! computer chose ${computerChoice} which beats ${humanChoice} `
        resultParagraph.textContent += `your score: ${humanScore} | computer's score: ${computerScore} `
        }
};

function declareWinner() {
    const winnerMessage = humanScore === 5 ? `you win the game! :) final scores | your score: ${humanScore} | computer's score: ${computerScore}` : `computer wins the game :( final scores | your score: ${humanScore} | computer's score: ${computerScore}`;
    const winnerParagraph = document.createElement("p");
    winnerParagraph.textContent = winnerMessage;
    resultContainer.appendChild(winnerParagraph);
}
/*shorthand for if/else statements. if the first condition is true, it will send the first message and if not it will send the second "first" : "second"
then of course create the paragraph, fill in the text content and append it to the parent node/container div*/