//Array of countries - the computer will randomly select one of these and the player will have to guess it
wordsToGuess = ["Argentina", "Bulgaria", "Denmark", "Ghana", "Honduras", "Israel", "Japan", "Mongolia", "Myanmar", "Philippines", "Spain", "Sweden", "Uganda", "Vietnam", "Yemen", ];

// Computer randomly chooses a word from the wordsToGuess array - this becomes the chosenWord
var chosenWord = document.querySelector("#word");
console.log(chosenWord.innerHTML);



// This function is run whenever the user presses a key.
document.onkeyup = function () {
  // Determines which key the player pressed - which guess they made - this becomes the playerGuess
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(playerGuess);
}