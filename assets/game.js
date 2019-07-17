//variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];
var psychicGuess= [];

var alphabet =["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//creates a variable and chooses a letter for the game to select
var psychicGuess = alphabet[Math.floor(Math.random()* alphabet.length)];
alphabet.push(psychicGuess);

//functions????//innertext? innerhtml?
function guessesRemaining() {
    document.getElementById("guessnumber").innerhtml = "Guesses Left: " +guessesleft;
}
function sofar() {
    document.getElementById("userguess").innerhtml = "Your Guesses so far: " + guessed.join(" ");

guessesRemaining();
}

//restart?
var restart = function() {
    guessesLeft = 9; 
    guessed = [];
	var burro = alphabet[Math.floor(Math.random() * alphabet.length)];
}


//user guess not defined?
document.onkeyup = function(event) { 
    guessesLeft--;
    var userGuess = event.key;
    guessed.push(userGuess);
    
    guessesremaining();
    sofar();}

//what else do i need here
    if (userGuess === psychicGuess){
        wins++;
        document.getElementById("wins").innherhtml="Wins: " + wins;
		restart();
    }

    else if (guessesleft === 0){
        losses++;
        document.getElementById("losses").innhertml="Losses: " +losses;
        restart()
    }


//variables do i need this? 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessnumber");
var guessesSoFarText = document.getElementById("userguess");