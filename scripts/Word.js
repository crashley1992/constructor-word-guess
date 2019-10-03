//ES6 
var { Letter } = require('./Letter.js');

class Word {
    constructor(word) {
        this.word = this.arrayBuilder(word);
    }
    arrayBuilder(word) {
        var emptArr = [];
        for (var i = 0; i < word.length; i++) {
            var newLetterObj = new Letter(word[i]);
            emptArr.push(newLetterObj);
        }
        return emptArr;
    }
    wordDisplay() {
        var emptWord = '';
        for (var i = 0; i < this.word.length; i++) {
            emptWord += this.word[i].guessCheck()
        }
        return emptWord;
    }
    guessHandler(letter) {
        for(var i = 0; i < this.word.length; i++) {
            this.word[i].checkIfGuessIsCorrect(letter);
        }
        return this.wordDisplay();
    }
}

var word = new Word( 'cat' );

console.log(word.guessHandler('c'));
console.log(word.guessHandler('z'));
console.log(word.guessHandler('t'));
