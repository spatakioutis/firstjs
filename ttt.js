function getComputerChoice() {
    let choice = Math.floor( Math.random() * 1000 )  % 3;

    switch (choice) {
        case 0: return "✊";
        case 1: return "✌";
        case 2: return "✋";
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) 
        return "Tie";

    if (playerChoice === "✊") {

        if (computerChoice === "✋")
            return "You lose!";
        else 
            return "You win!";
    }
    else if (playerChoice === "✋") {

        if (computerChoice == "✊")
            return "You win!";
        else 
            return "You lose!";
    }   
    else {
        if (computerChoice == "✊")
            return "You lose!";
        else 
            return "You win!";
    } 
}

const buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerChoice = button.textContent;
        let computerChoice = getComputerChoice();

        const playerIcon = document.querySelector("#playerIcon");
        playerIcon.textContent = playerChoice;

        const computerIcon = document.querySelector("#computerIcon");
        computerIcon.textContent = computerChoice;

        result = playRound(playerChoice, computerChoice);

        const resultText = document.querySelector('#result');
        resultText.textContent = result;
    });
});


