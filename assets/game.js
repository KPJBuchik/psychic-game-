//define variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];


var alphabet = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//fill out index.html 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessnumber");
var guessesSoFarText = document.getElementById("userguess");


//defines computers guess

var psychicGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(psychicGuess);




//functions to fill out the guesses remaining and letters used.  innertext and innhertml??? push??? where do i invoke this???




//global reset.  invoke in the logic


//user guess not defined? create a users guess variable.  invoke functions here?
document.onkeyup = function (event) {
    guessesSoFarText.textContent = "Your Guesses: " + guessed;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;




    guessesLeft--;

    var userGuess = event.key.toLowerCase();

    guessed.push(userGuess);
    console.log(guessed);

    console.log(userGuess);

    //logic .  what else do i need here.  invoke functions? 
    if (guessesLeft === -2) {
        losses++;
        lossesText.textContent = "Losses: " + losses;
        alert("Sorry you lost");
        location.reload();

    }

    if (userGuess === psychicGuess) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        alert("You won!");
        location.reload();
    }







}