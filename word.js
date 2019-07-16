var LetterObject = require("./letter.js");

var letterObject = new LetterObject();

var wordArray = ["mongoose", "shrew", "possum", "aardvark"];
var randNum = Math.floor(Math.random() * wordArray.length);
var randWord = wordArray[randNum];
var chars = JSON.stringify(randWord).split('');
var cleanWord = chars.slice(1, chars.length - 1);
var letter;


var Word = function () {
  var gameWord = [];
  this.makeWord = function () {
    console.log(cleanWord);
    for (i = 0; i < cleanWord.length; i++) {
      letter = cleanWord[i];
      letterObject.letter = letter;
      gameWord.push(letterObject);
      gameWord[i].display();
    }
  };
  makeWord();
};

Word();