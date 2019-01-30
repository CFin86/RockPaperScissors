const computerPlay = () => {
    const computerInput = Math.floor(Math.random() * Math.floor(3));
    if (computerInput === 0) {
        return 'rock';
    }
    if (computerInput === 1) {
        return 'paper';
    }
    if (computerInput === 2) {
        return 'scissors';
    }
}
// const playerOne = 'scissors';
// const playerTwo = 'paper';

// check out MDN's section on Standard built-in objects
const humanPlay = (input) => {
    const decisionArray = ['rock', 'paper', 'scissors'];
    while (!input) {
        let decision = prompt('Please choose rock, paper, or scissors');
        if (typeof decision === "string") {
            if (decision === "" || decision === null) {
                input = false;
                alert('You gotta put something in here, buddy');
            }
            decision = decision.toLowerCase().trim();
            if (decisionArray.includes(decision) === false && decision !== "" || decision === null) {
                alert('I\'m not 100% sure you know how to play rock, paper, scissors. ' +
                    decision + ' is not a correct input');
                input = false;
            }
            if (decisionArray.includes(decision)) {
                input = true;
                return decision;
            }
        }
    }
}

const playGame = () => {
    let inp = false;
    let human = humanPlay(inp);
    const computer = computerPlay();

    if (human === 'rock' && computer === 'scissors' ||
        human === 'paper' && computer === 'rock' ||
        human === 'scissors' && computer === 'paper'
    ) {
        document.getElementById("computer-play").innerText = computer;
        document.getElementById("human-play").innerText = human;
        document.getElementById("winner").innerText = 'Human, you win';
        return 'Human, you win';
    }
    if (human === 'rock' && computer === 'paper' ||
        human === 'paper' && computer === 'scissors' ||
        human === 'scissors' && computer === 'rock') {
        document.getElementById("computer-play").innerText = computer;
        document.getElementById("human-play").innerText = human;
        document.getElementById("winner").innerText = 'Computer, you win';
        return 'Computer, you win';
    }
    if (human === computer) {
        document.getElementById("winner").innerText = 'Both of you chose the same thing, but Human you still lose';
        return 'Both of you chose the same thing, but Human you still lose';
    }
}

playGame();


// higher-order functions:
//     https://www.sitepoint.com/higher-order-functions-javascript/