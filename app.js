const container = document.querySelector("#container");
let humanScore = 0, computerScore = 0;

const scoreDisplay = document.createElement("p");
scoreDisplay.textContent = `The score is: You ${humanScore} and Computer ${computerScore}`;
container.appendChild(scoreDisplay);

//playGame();
getHumanChoice();

function updateScore(humanScore, computerScore) {
    if (humanScore < 5 || computerScore < 5) {
        scoreDisplay.textContent = `The score is: You ${humanScore} and Computer ${computerScore}`;
    }
    if (humanScore == 5) {
        scoreDisplay.textContent = `You are the Winner!`;
    }
    if (computerScore == 5) {
        scoreDisplay.textContent = `You Lose!`;
    }
}

function playGame(humanChoice) {

    const humanSelect = humanChoice;

    function playRound(humanChoice) {

        //let humanScore = 0, computerScore = 0;

        //for (let roundCount = 0; roundCount < 5; roundCount++) {

        const computerSelection = getComputerChoice();
        /*console.log(humanSelection);
        console.log(computerSelection);
        */
        if (humanChoice == "rock") {
            if (computerSelection == "paper") {
                console.log("You Lose!");
                computerScore += 1;
                updateScore(humanScore, computerScore);
            }
            else if (computerSelection == "rock") {
                console.log("It's a Tie!");
            }

            else if (computerSelection == "scissors") {
                console.log("You Win!");
                humanScore += 1;
                updateScore(humanScore, computerScore);
            }
        }

        if (humanChoice == "paper") {
            if (computerSelection == "scissors") {
                console.log("You Lose!");
                computerScore += 1;
                updateScore(humanScore, computerScore);
            }
            else if (computerSelection == "paper") {
                console.log("It's a Tie!");
            }
            else if (computerSelection == "rock") {
                console.log("You Win!");
                humanScore += 1;
                updateScore(humanScore, computerScore);
            }
        }

        if (humanChoice == "scissors") {
            if (computerSelection == "scissors") {
                console.log("It's a Tie!");
            }
            else if (computerSelection == "paper") {
                console.log("You Win!");
                humanScore += 1;
                updateScore(humanScore, computerScore);
            }
            else if (computerSelection == "rock") {
                console.log("You Lose!");
                computerScore += 1;
                updateScore(humanScore, computerScore);
            }
        }
        // }

        //console.log("The score is: You:" + humanScore + " and Computer:" + computerScore);
    }
    playRound(humanSelect);
}

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const result = (Math.floor(Math.random() * computerChoices.length));
    /*console.log(result);*/
    if (result == 0) {
        /*console.log(choices[0]);*/
        return computerChoices[0];
    }
    if (result == 1) {
        /*console.log(choices[1])*/
        return computerChoices[1];
    }
    if (result == 2) {
        /*console.log(choices[2])*/
        return computerChoices[2];
    }
}

function getHumanChoice() {
    /*
        const rockButton = document.createElement("button");
        const rockNode = document.createTextNode("Rock");
        rockButton.appendChild(rockNode);
    */

    const rockBtn = document.querySelector("#rockBtn");
    rockBtn.addEventListener("click", function (e) {
        let humanChoice = "rock";
        console.log(humanChoice);
        playGame(humanChoice);
    });

    const scissorsBtn = document.querySelector("#scissorsBtn");
    scissorsBtn.addEventListener("click", function (e) {
        let humanChoice = "scissors";
        console.log(humanChoice);
        playGame(humanChoice);
    });

    const paperBtn = document.querySelector("#paperBtn");
    paperBtn.addEventListener("click", function (e) {
        let humanChoice = "paper";
        console.log(humanChoice);
        playGame(humanChoice);
    });
}

