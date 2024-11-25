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

function showCustomAlert(playerMove, computerMove, result) {
    const customAlert = document.getElementById('customAlert');
    const alertText = document.getElementById('alertText');
    const alertClose = document.getElementById('alertClose');


    let message = `You chose: ${playerMove.toUpperCase()}\n`;
    message += `Computer chose: ${computerMove.toUpperCase()}\n\n`;
    message += result;

    message += `\n\nScore:\nWins: ${score.wins} | Losses: ${score.loses} | Draws: ${score.draws}`;

    alertText.innerText = message;

    customAlert.style.display = 'flex';

    alertClose.onclick = function () {
        customAlert.style.display = 'none';
    };
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "rock") {
        if (computerMove === "rock") {
            result = "It's a draw! 😄😊😅";
            score.draws++;
        } else if (computerMove === "paper") {
            result = "Sorry, you lost! 😒😒";
            score.loses++;
        } else {
            result = "Congratulations, you win! 🎉😊";
            score.wins++;
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            result = "Congratulations, you win! 🎉😊";
            score.wins++;
        } else if (computerMove === "paper") {
            result = "It's a draw! 😄😊😅";
            score.draws++;
        } else {
            result = "Sorry, you lost! 😒😒";
            score.loses++;
        }
    } else if (playerMove === "scissor") {
        if (computerMove === "rock") {
            result = "Sorry, you lost! 😒😒";
            score.loses++;
        } else if (computerMove === "paper") {
            result = "Congratulations, you win! 🎉😊";
            score.wins++;
        } else {
            result = "It's a draw! 😄😊😅";
            score.draws++;
        }
    }

    showCustomAlert(playerMove, computerMove, result);

    localStorage.setItem('Score', JSON.stringify(score));
}
