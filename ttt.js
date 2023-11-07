function getComputerChoice() {
    let choice = Math.floor( Math.random() * 1000 )  % 3;

    console.log(choice);

    switch (choice) {
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) 
        return "Tie";

    if (playerChoice === "rock") {

        if (computerChoice === "paper")
            return "You lose! paper beats rock";
        else 
            return "You win! rock beats scissors";
    }
    else if (playerChoice === "paper") {

        if (computerChoice == "rock")
            return "You win! paper beats rock";
        else 
            return "You lose! scissors beats paper";
    }   
    else {
        if (computerChoice == "rock")
            return "You lose! rock beats scissors";
        else 
            return "You win! scissors beats paper";
    } 
}


for (i=0; i<5; i++) {
    let playerSelection = prompt();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

