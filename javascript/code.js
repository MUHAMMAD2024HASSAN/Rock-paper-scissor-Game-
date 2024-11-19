let sccore = JSON.parse(localStorage.getItem('Score')) ||
{
    wins: 0,
    loses: 0,
    draws: 0,
} 

function pickCoumpteMove() {
    const randomNumber = Math.random();
    let comperMove = "";

    if (randomNumber >= 0 && randomNumber < 1/3) {
        comperMove == "rock";
    }

    else if (randomNumber >= 1/3 && randomNumber <2/3) {
        comperMove = "papre"
    }

    else {
        comperMove = "scissor"
    }
    return comperMove;
}

function playGame(playMove) {
    const computerMove = pickCoumpteMove();
    let result = "";

    if (computerMove === "rock") {
        
    if (computerMove === "rock"){
        result = "Game has drawned! 😄😊😅";
    }

    if (computerMove === "paper"){
        result = "Sorry, You're lost! 😒😒"
    }

    if (computerMove === "scissor"){
        result = "Congratualtions, You're Win! 🎉😊"
    }
}

    else if (computerMove === "paper") {
               
    if (computerMove === "rock"){
        result = "Congratualtions, You're Win! 🎉😊";
    }

    if (computerMove === "paper"){
        result = "Game has drawned! 😄😊😅"
    }

    if (computerMove === "scissor"){
        result = "Sorry, You're lost! 😒😒"
    } 
    }

    else if (computerMove  === "scissor") {
        if (computerMove  === "rock ") {
            result = "Sorry, You're lost! 😒😒"
        }

        if (computerMove === "paper") {
            result = "Congratualtions, You're Win! 🎉😊"
        }

        if (computerMove === 'scissor') {
            result = "Game has drawned! 😄😊😅"
        }

    }
}