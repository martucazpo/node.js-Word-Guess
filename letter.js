

var LetterObject = function (letter) {

  this.letter = letter;
  this.placeholder = "_";
  this.trigger = false;
  this.show = function(){
    return this.letter;
  };
  this.letterGuess = function (userGuess) {
    if (this.letter === userGuess) {
      this.trigger = true;
      return this.letter;
      
    }
    if (this.letter !== userGuess) {
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