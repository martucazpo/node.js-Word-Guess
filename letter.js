var cleanWord = ['m', 'a', 'r', 'c', 'o'];
var guess = process.argv[2];

var gameWord = [];

var LetterObject = function (letter) {

  this.letter = letter;
  this.placeholder = "_";
  this.show = function () {
    console.log(this.letter);
  };
  this.hide = function () {
    console.log(this.placeholder);
  };
  this.letterGuess = function () {
    if (this.letter === guess) {
      return true;
    }
    if (this.letter !== guess) {
      return false;
    }
  };
  this.toString = function () {
    if (this.letterGuess() == true) {
      this.show(letter);
    }
    if (this.letterGuess() == false) {
      this.hide(placeholder);
    }
  };
};

LetterObject();

makeWord = function () {

  for (i = 0; i < cleanWord.length; i++) {
    letter = cleanWord[i];
    cleanWord[i] = new LetterObject(letter);
    gameWord.push(new LetterObject(letter));
  }
  for (j = 0; j < gameWord.length; j++) {
    console.log(gameWord[j].toString());
  }
};
makeWord();