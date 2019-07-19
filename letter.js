

var LetterObject = function (letter) {

  this.letter = letter;
  this.letterGuess = false;
  this.toString = function () {
    if (this.checkLetter() == " ") {
      return " ";
    }
    else if (this.checkLetter() == false) {
      return "_";
    }
    else {
      return this.letter;
    }
  };
  this.checkLetter = function(userGuess){
    if(userGuess === this.letter){
      this.letterGuess = true;
    }

  };
};


module.exports = LetterObject;