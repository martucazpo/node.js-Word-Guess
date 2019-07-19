var Word = require("./word");
var inquirer = require("inquirer");
var myWord = "";
var counter = 0;

function startGame() {
   
     myWord = new Word();
     choiceWord = myWord.cleanWord;
     myWord.makeWord(); 
    console.log("You have 10 chances to guess the word!");
    promptUser();
}

function promptUser() {
    if (counter < 10) {
        console.log(myWord.wordDisplay());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Pick a letter and press enter. "
            }
        ]).then(function() {
                gameAnswer();
        });
    }
    else{
        console.log("Sorry, you're out of guesses.");
        console.log(choiceWord);
        myWord = " ";
        select = 0;
        counter = 0;
        startGame();
    }
}

function gameAnswer(input) {
    myWord.checkAnswer();
    
      if (myWord.checkAnswer() !== true ){
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

function rightGuess(input) {
    console.log("You guessed right!");
    if (choiceWord === myWord.wordDisplay ) {
        myWord.wordDisplay();
        console.log("You win!!");
        myWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();
    }
}

startGame();   