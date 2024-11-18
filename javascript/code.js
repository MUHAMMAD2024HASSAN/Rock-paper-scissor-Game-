// JavaScript Code for Rock, Paper, Scissors Game
function playGame(userChoice) {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = 'You Win!';
    } else {
        result = 'You Lose!';
    }

    // Show the result in an alert
    alert(`
        You chose: ${capitalize(userChoice)}
        Computer chose: ${capitalize(computerChoice)}
        Result: ${result}
    `);
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
