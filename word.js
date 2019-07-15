
var letterObject = require("./letter");

var wordArray = ["mongoose", "shrew", "possum", "aye"-"aye"];
var randNum = Math.floor(Math.random() * wordArray.length);
var randWord = wordArray[randNum];
var chars = JSON.stringify(randWord).split('');
var cleanWord = chars.slice(1, chars.length -1);
var gameWord = cleanWord.map(letterObject);


console.log(gameWord);


