let score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    loses: 0,
    draws: 0,
};

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else {
        computerMove = "scissor";
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "Game has drawn! 😄😊😅";
            score.draws++;
        } else if (computerMove === "paper") {
            result = "Sorry, You're lost! 😒😒";
            score.loses++;
        } else {
            result = "Congratulations, You're Win! 🎉😊";
            score.wins++;
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "Congratulations, You're Win! 🎉😊";
            score.wins++;
        } else if (computerMove === "paper") {
            result = "Game has drawn! 😄😊😅";
            score.draws++;
        } else {
            result = "Sorry, You're lost! 😒😒";
            score.loses++;
        }
    } else if (playerMove === "scissor") {
        if (computerMove === "rock") {
            result = "Sorry, You're lost! 😒😒";
            score.loses++;
        } else if (computerMove === "paper") {
            result = "Congratulations, You're Win! 🎉😊";
            score.wins++;
        } else {
            result = "Game has drawn! 😄😊😅";
            score.draws++;
        }
    }

    alert(`${result}\nWins: ${score.wins}\nLoses: ${score.loses}\nDraws: ${score.draws}`);
    localStorage.setItem('Score', JSON.stringify(score));
}
