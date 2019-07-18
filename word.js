var LetterObject = require("./letter.js");

var letterObject = new LetterObject();


MakeWord = function () {

  var wordArray = ["mongoose", "shrew", "possum", "aardvark"];
  var randNum = Math.floor(Math.random() * wordArray.length);
  var randWord = wordArray[randNum];
  var chars = JSON.stringify(randWord).split('');
  var cleanWord = chars.slice(1, chars.length - 1);
  var letter;
  var gameWord = [];
  var letterWord = [];

  for (i = 0; i < cleanWord.length; i++) {
    letter = cleanWord[i];
    letterObject.letter = letter;
    gameWord.push(letterObject.toString());
    letterWord.push(letterObject.letterGuess());
  
  }

  this.word = gameWord.join(" ");

  this.checkWord = letterWord;

  this.checkAnswer = function (data) {
    for (j = 0; j < this.checkWord.length; j++) {
      if (checkWord[j] == true) {
        return true;
      } else {
        return false;
      }
    }
  };
console.log(checkWord[1]);
};

MakeWord();

module.exports = MakeWord;