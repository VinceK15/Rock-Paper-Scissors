let humanScore, computerScore = 0;

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
    let humanChoice = prompt("Rock, Paper or Scissors?");
    let lowercaseChoice = humanChoice.toLowerCase();

    if (["rock", "paper", "scissors"].includes(lowercaseChoice)) {
        return lowercaseChoice;
    } else {
        console.log("Invalid input. Try Again.");
        return getHumanChoice();  // important to return this!
    }
}

function playGame() {

    function playRound() {

        let humanScore = 0, computerScore = 0;

        for (let roundCount = 0; roundCount < 5; roundCount++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            console.log(humanSelection);
            console.log(computerSelection);

            if (humanSelection == "rock") {
                if (computerSelection == "paper") {
                    console.log("You Lose!");
                    computerScore += 1
                }
                else if (computerSelection == "rock") {
                    console.log("It's a Tie!");
                }

                else if (computerSelection == "scissors") {
                    console.log("You Win!");
                    humanScore += 1;
                }
            }

            if (humanSelection == "paper") {
                if (computerSelection == "scissors") {
                    console.log("You Lose!");
                    computerScore += 1;
                }
                else if (computerSelection == "paper") {
                    console.log("It's a Tie!");
                }
                else if (computerSelection == "rock") {
                    console.log("You Win!");
                    humanScore += 1;
                }
            }

            if (humanSelection == "scissors") {
                if (computerSelection == "scissors") {
                    console.log("It's a Tie!");
                }
                else if (computerSelection == "paper") {
                    console.log("You Win!");
                    humanScore += 1;
                }
                else if (computerSelection == "rock") {
                    console.log("You Lose!");
                    computerScore += 1;
                }
            }
        }

        console.log("The score is: You:" + humanScore + " and Computer:" + computerScore);
    }
    playRound();
}