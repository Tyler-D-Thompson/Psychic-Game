var letters =["a","b","c"];

var lettersGuessed =[];

varlettersToGuess = null;

var guessesLeft = 10;

var win =0 ;

var losse = 0;

var updateGuessesLeft = function() {
    document.querySelector("#amount-of-guesses-left").innerHTML = guessesLeft;
};

var updatelettersToGuess = function() {
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)];

};

var updatedGuessedLetters = function() {
    document.querySelector("#guesses-so-far").innerHtML = lettersGuesses.join(", ");
};

var reset = function() {
    guessesLeft = 10;
    lettersGuessed = [];
    updateGuessesLeft();
    updatedGuessedLetters();
    updatelettersToGuess();
};

document.onkeydown = function(event) {
    gueesesLeft--;

};

var letter = event.key.toLowerCase();

lettersGuessed.push(letter);

