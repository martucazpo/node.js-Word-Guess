var cleanWord = ['m', 'a', 'r', 'c', 'o'];
var guess = process.argv[2];

var LetterObject = function (placeholder,letter) {

  var letterArray = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];
  var letter;


  this.placeholder = "_";
  this.letter = cleanWord[0];
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


/*var m = new LetterObject("m", "_");
var a = new LetterObject("a", "_");
var r = new LetterObject("r", "_");
var c = new LetterObject("c", "_");
var o = new LetterObject("o", "_");

letterArray.push(m, a, r, c, o);

  for (i = 0; i < letterArray.length; i++) {
    letterArray[i].toString();
    if(letterArray[i].letterGuess() == true){
      correctLetter.push(letterArray[i].letter)
    }
  
  }*/
// for( var j = 0; j < cleanWord.length; j++){
  LetterObject();

  for ( k = 0; k < cleanWord.length; k++){

cleanWord[k] = new LetterObject();
console.log(cleanWord[k]);}