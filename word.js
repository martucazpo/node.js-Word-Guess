var LetterObject = require("./letter.js");

var letterObject = new LetterObject();




Word = function (wordArray) {

  var letter;
  var displayWord = [];
  var wordArray = [];

  this.wordArray = ["mongoose", "shrew", "possum", "aardvark"];

  this.randNum = Math.floor(Math.random() * this.wordArray.length);

  this.randWord = this.wordArray[this.randNum];

  this.chars = JSON.stringify(this.randWord).split('');

  this.cleanWord = this.chars.slice(1, this.chars.length - 1);

  this.gameWord = [];

  this.makeWord = function () {
    for (i = 0; i < this.cleanWord.length; i++) {
      letter = this.cleanWord[i];
      letterObject.letter = letter;
      this.gameWord.push(letterObject);
    }
  };

  this.wordDisplay = function () {
    for (j = 0; j < this.gameWord.length; j++) {
      displayWord.push(this.gameWord[j].toString());
    }
    return displayWord.join(" ");
  };


  this.checkAnswer = function () {
    for (k = 0; j < this.gameWord.length; k++) {
      this.gameWord[k].checkLetter();
    }
  };
};


module.exports = Word;