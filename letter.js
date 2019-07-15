var cleanWord = ['m', 'a', 'r', 'c', 'o'];
var guess = process.argv[2];

var gameWord = [];

var LetterObject = function (letter, placeholder) {
  
  this.letter = letter;
  this.placeholder = "_";
  this.show = function () {
    console.log(this.letter);
  };
  this.hide = function () {
    console.log(this.letter);
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

makeWord = function(){

  for( i = 0; i < cleanWord.length; i++){
    letter = cleanWord[i];
letter = new LetterObject(letter,placeholder);
gameWord.push(new LetterObject(letter,placeholder));
  }
  console.log(gameWord);
};
makeWord();