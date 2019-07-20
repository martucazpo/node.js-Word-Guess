var LetterObject = require("./letter.js");

var letterObject = new LetterObject();

Word = function () {
  var letter;

  var displayWord = [];

  var wordArray = ["mongoose", "shrew", "possum", "aardvark"];

  var randNum = Math.floor(Math.random() * wordArray.length);

  var randWord = wordArray[randNum];

  var chars = JSON.stringify(randWord).split('');

  var cleanWord = chars.slice(1, chars.length - 1);

  var gameWord = [];

  this.makeWord = function () {
    for (i = 0; i < cleanWord.length; i++) {
      letter = cleanWord[i];
      letterObject.letter = letter;
     gameWord.push(letterObject);
    }
  };

  this.cleanWord = cleanWord;
  this.gameWord = gameWord;

  this.wordDisplay = function () {
    for (j = 0; j < this.gameWord.length; j++) {
      displayWord.push(this.gameWord[j].showLetters());
    }
    return displayWord.join(" ");
  };


  this.checkAnswer = function (guess) {
    for (k = 0; k < this.gameWord.length; k++) {
      this.gameWord[k].checkLetter(guess);
      return gameWord[k].letterGuess;
    }
  };
  
};

module.exports = Word;