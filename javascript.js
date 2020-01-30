var letters =["a","b","c"];
var lettersGuessed =[];
var lettersToGuess = null;
var guessesLeft = 9;
var win =0 ;
var losses = 0;

var updateguessesLeft = function() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};
var updatelettersToGuess = function() {
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)];

};
var updatedGuessedLetters = function() {
    document.querySelector("#lettersGuessed").innerHtML = lettersGuessed.join(",");
};
var reset = function() {
    guessesLeft = 9;
    lettersGuessed = [];
    updateGuessesLeft();
    updatedGuessedLetters();
    updateLettersToGuess();
};
updatelettersToGuess();
updateguessesLeft();
document.onkeydown = function(event) {
    guessesLeft--;
    var letter = event.key.toLowerCase();
    lettersGuessed.push(letter);
    updateguessesLeft();
    updated(GuessedLetters);
    if (letter === lettersToGuess) {
        wins++;
        document.querySelector("#win").innerHTML = win;
        reset();
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }
    

};


