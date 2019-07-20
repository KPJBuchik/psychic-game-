//define variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessed = [];


var alphabet = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessnumber");
var guessesSoFarText = document.getElementById("userguess");


//defines computers guess

var psychicGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(psychicGuess);

//global reset.  invoked in logic
var reset = function(){
    psychicGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicGuess)
    guessed=[];
    guessesLeft=9;
   

}
//create a users guess variable.  
document.onkeyup = function (event) {
    guessesLeft--;
    guessesSoFarText.textContent = "Your Guesses: " + guessed;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;




    

    var userGuess = event.key.toLowerCase();

    guessed.push(userGuess);
    console.log(guessed);

    console.log(userGuess);

    //logic
    if (guessesLeft === 0) {
        losses++;
        lossesText.textContent = "Losses: " + losses;
        alert("You Died!");
        reset();
    }

    if (userGuess === psychicGuess) {
        wins++;
        winsText.textContent = "Wins: " + wins;
        var audio = new Audio('assets/x-mentheme.mp3');
        audio.play();
        alert("Professor Xavier is a Jerk!");
        //added a song. I'm sorry I can't make it stop.  
        reset();
        }







}