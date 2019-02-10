//to do manipulate the DOM

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

const humanSelection = prompt('Rock paper or scissors?');

const lowerHumanSelection = humanSelection.toLowerCase();
const computerSelection = computerPlay();

const playGame = (human, computer) => {
    if (human === 'rock' && computer === 'scissors' ||
        human === 'paper' && computer === 'rock' ||
        human === 'scissors' && computer === 'paper'
    ) {
        return 'Human, you win';
    }
    if (human === 'rock' && computer === 'paper' ||
        human === 'paper' && computer === 'scissors' ||
        human === 'scissors' && computer === 'rock') {
        return 'Computer, you win';
    }
    if(human === computer){
        return 'Both of you chose the same thing, but Human you still lose';
    }
}
console.log('the type of humanSelection is ', typeof humanSelection)
console.log('Human selection ', humanSelection);
console.log('the type of computerSelection is ', typeof computerSelection)
console.log('Computer selection ', computerSelection);

console.log(playGame(humanSelection, computerSelection));
