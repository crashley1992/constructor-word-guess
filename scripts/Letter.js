class Letter {
    constructor(letter) {
        this.letter = letter;
        this.guessed = false;
    }
    guessCheck() {
        if ( this.guessed === true ) {
            return this.letter;
        } else {
            return `_ `;
        }
    }
    checkIfGuessIsCorrect(randomGuess) {
        if (randomGuess === this.letter ) {
            this.guessed = true;
        }
    }
}

const letter = new Letter('a');

console.log(letter.letter);
console.log(letter.guessCheck());
letter.checkIfGuessIsCorrect('a');
console.log(letter.guessCheck());


module.exports = {
    Letter 
}