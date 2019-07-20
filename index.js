var Word = require("./word");
var inquirer = require("inquirer");
var myWord = "";
var choiceWord = "";
var counter = 0;

function startGame() {
   
     myWord = new Word();
     myWord.makeWord();
     choiceWord = myWord.cleanWord; 
    console.log("You have 10 chances to guess the word!");
    promptUser();
}

function promptUser() {
    if (counter < 10) {
        console.log(choiceWord);
    console.log(myWord.wordDisplay());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Pick a letter and press enter. "
            }
        ]).then(function(input) {
               // gameAnswer(input);
               myWord.checkAnswer(input);
               console.log(choiceWord);
              console.log(myWord.wordDisplay());
        });
    }
   /* else{
        console.log("Sorry, you're out of guesses.");
        console.log(choiceWord);
        myWord = "";
        choiceWord = "";
        select = 0;
        counter = 0;
        startGame();
    }*/
}

/*function gameAnswer(data) {
    
    myWord.checkAnswer(data.letter);

      if (myWord.checkAnswer(data.letter) == false){
            console.log("Sorry, wrong letter!");
            counter++;
            console.log((10 - counter) + " guesses remaining");
            promptUser();
        }
        else {
            rightGuess();
        }
    
}

function rightGuess() {
    console.log("You guessed right!");
    if (choiceWord === myWord.wordDisplay() ) {
        console.log(myWord.wordDisplay());
        console.log("You win!!");
        myWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();
    }
}*/

startGame();   