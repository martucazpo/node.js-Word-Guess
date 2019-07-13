
var guess = process.argv[2];
var letterArray = [];
var correctLetter = [];

function LetterObject(letter, placeholder) {
  this.letter = letter;
  this.placeholder = placeholder;
  this.show = function () {
    console.log(this.letter);
  }
  this.hide = function () {
    console.log(this.placeholder)
  }
  this.letterGuess = function () {
    if (this.letter === guess) {
      return true;
    } if (this.letter !== guess) {
      return false;
    }
  }
  this.display = function () {
    if (this.letterGuess() ==  true) {
      this.show(letter)
    }
    if (this.letterGuess() == false) {
      this.hide(placeholder)
    }
  }

}

var m = new LetterObject("m", "_");
var a = new LetterObject("a", "_");
var r = new LetterObject("r", "_");
var c = new LetterObject("c", "_");
var o = new LetterObject("o", "_");

letterArray.push(m, a, r, c, o);

for (i = 0; i < letterArray.length; i++) {
  console.log(letterArray[i].display());
  if(letterArray[i].letterGuess() == true){
    correctLetter.push(letterArray[i].letter)
  }

}

console.log(correctLetter);





