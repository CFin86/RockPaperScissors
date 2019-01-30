const computerPlay = () => {
    const computerInput =  Math.floor(Math.random() * Math.floor(3));
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

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());