var LetterObject = require("./letter.js");

var letterObject = new LetterObject();

Word = function () {
  var letter;
  var gameWord = [];
  var displayWord = [];

  var wordArray = ["mongoose", "shrew", "possum", "aardvark"];

  var randNum = Math.floor(Math.random() * wordArray.length);

  var randWord = wordArray[randNum];

  var chars = JSON.stringify(randWord).split('');

  var cleanWord = chars.slice(1, chars.length - 1);

  this.makeWord = function () {
    for (i = 0; i < cleanWord.length; i++) {
      letter = cleanWord[i];
      letterObject.letter = letter;
      gameWord.push(letterObject);
    }
  };
makeWord();
  this.cleanWord = cleanWord;

  this.gameWord = gameWord;

 this.wordDisplay = function () {
    for (j = 0; j < this.gameWord.length; j++) {
      displayWord.push(this.gameWord[j].showLetters());
    }
    return displayWord.join(" ");
  };
wordDisplay();

  this.checkAnswer = function (input) {
    for (k = 0; j < this.gameWord.length; k++) {
      this.gameWord[k].checkLetter(input);
    }
  };
};
Word();

module.exports = Word;