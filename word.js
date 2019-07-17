var LetterObject = require("./letter.js");

var letterObject = new LetterObject();

var wordArray = ["mongoose", "shrew", "possum", "aardvark"];

var Word = function () {

  var randNum = Math.floor(Math.random() * wordArray.length);
  var randWord = wordArray[randNum];
  var chars = JSON.stringify(randWord).split('');
  var cleanWord = chars.slice(1, chars.length - 1);
  var letter;
  var gameWord = [];

  this.makeWord = function () {
    console.log(cleanWord);
    for (i = 0; i < cleanWord.length; i++) {
      letter = cleanWord[i];
      letterObject.letter = letter;
      gameWord.push(letterObject.toString());
    }
    console.log(gameWord);
  };
  makeWord();
};

Word();