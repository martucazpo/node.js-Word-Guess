var guess = "";
var nodeArgs = process.argv;
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    guess = guess + "+" + nodeArgs[i];
  } else {
    guess += nodeArgs[i];

  }
}

var letter;

var LetterObject = function () {

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
  this.display = function () {
    if (this.letterGuess() == true) {
      this.show(this.letter);
    }
    if (this.letterGuess() == false) {
      this.hide(this.placeholder);
    }
  };
};


module.exports = LetterObject;