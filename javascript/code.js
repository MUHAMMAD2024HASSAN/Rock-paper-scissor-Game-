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
}

