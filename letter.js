

var LetterObject = function (letter) {

  this.letter = letter;
  this.placeholder = "_";
  this.letterGuess = false;
  this.showLetters = function () {
    if (this.letter == " ") {
      return " ";
    }
    else if (!this.letterGuess) {
      return this.placeholder;
    }
    else {
      return this.letter;
    }
  };
  this.checkLetter = function(input){
    if(input === this.letter){
      this.letterGuess = true;
    }

  };
};
LetterObject();

module.exports = LetterObject;