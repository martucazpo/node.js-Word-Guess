var guess = process.argv[2];

var LetterObject = function (letter) {

  this.letter = letter;
  this.placeholder = "_";
  this.trigger = false;
  this.letterGuess = function () {
    if (this.letter === guess) {
      this.trigger = true;
      return true;
      
    }
    if (this.letter !== guess) {
      return false;
    }
  };
  this.toString = function () {
    if (this.letterGuess() == true) {
      return this.letter;
    }
    if (this.letterGuess() == false) {
      return this.placeholder;
    }
  };
};


module.exports = LetterObject;