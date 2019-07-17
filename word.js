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

  for (i = 0; i < cleanWord.length; i++) {
    letter = cleanWord[i];
    letterObject.letter = letter;
    gameWord.push(letterObject.toString());
  }
  this.word = gameWord.join(" ");
};




module.exports = MakeWord;