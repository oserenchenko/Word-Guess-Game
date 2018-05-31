//Array of countries - the computer will randomly select one of these and the player will have to guess it
wordsToGuess = ["Argentina", "Bulgaria", "Denmark", "Ghana", "Honduras", "Israel", "Japan", "Mongolia", "Myanmar", "Philippines", "Spain", "Sweden", "Uganda", "Vietnam", "Yemen", ];

// Function that lets the computer randomly choose a word from the wordsToGuess array - the chose word becomes "randomSelect"
function chooseNewWord() {
  var randomSelect = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
  return randomSelect;
}
//runs the above function
var randomWord = chooseNewWord();
console.log(randomWord); //logging it to the console just for now, for troubleshooting

//Function that that the "randomWord" chosen above and replaces each string with a "___" and then displays it in the html header tag with the "chosenWordBlanks" ID
function hideWord(randomWord) {
  var blanks = ""
  for (i = 0; i < randomWord.length; i++) {
    blanks += "____    ";
  }
  var chosenWord = document.querySelector("#chosenWordBlanks");
  chosenWord.innerHTML = blanks;
}
//runs the above function 
hideWord(randomWord);

// This function is run whenever the user presses a key.
document.onkeyup = function () {
  // Determines which key the player pressed - which guess they made - this becomes the playerGuess
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(playerGuess);
}