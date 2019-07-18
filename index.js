var MakeWord = require("./word");
var inquirer = require("inquirer");
var chalk = require("chalk");
var guess = inquirer.input;
var makeWord;
var theWord = "";
var counter = 0;

function startGame() {
     makeWord = new MakeWord();
     theWord = makeWord.word; 
    console.log("You have 10 chances to guess the word!");
    promptUser();
}

function promptUser() {
    if (counter < 10) {
        console.log(theWord);
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Pick a letter and press enter. "
            }
        ]).then(function(data) {
                checkAnswer(data);
        });
    }
    else{
        console.log("Sorry, you're out of guesses.");
        console.log(theWord);
        theWord = " ";
        select = 0;
        counter = 0;
        startGame();
    }
}

function checkAnswer(data) {
    
      if (makeWord.checkAnswer == false ){
            console.log("Sorry, wrong letter!");
            counter++;
            console.log(counter + " guesses remaining");
            promptUser();
        }
        else {
            rightGuess();
        }
    
  //  else {
      //  console.log("Please enter a letter, one at a time.");
      //  promptUser();
  //  }
}

function rightGuess() {
    console.log("You guessed right!");
    if (makeWord.checkAnswer == true ) {
        console.log(theWord);
        console.log("You win!!");
        theWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();
    }
}

startGame();   