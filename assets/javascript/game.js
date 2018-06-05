//Array of country objects - the computer will randomly select one of these and the player will have to guess it
countryArray = [{
    "country": "argentina"
  },
  {
    "country": "bulgaria"
  },
  {
    "country": "denmark"
  },
  {
    "country": "ghana"
  },
  {
    "country": "honduras"
  },
  {
    "country": "israel"
  },
  {
    "country": "japan"
  },
  {
    "country": "mongolia"
  },
  {
    "country": "myanmar"
  },
  {
    "country": "philippines"
  },
  {
    "country": "spain"
  },
  {
    "country": "sweden"
  },
  {
    "country": "uganda"
  },
  {
    "country": "vietnam"
  },
  {
    "country": "yemen"
  }
];


// Function that lets the computer randomly choose a country object from the countryArray - the country name then becomes "randomCountry"
function chooseRandomCountry() {
  var randomObject = countryArray[Math.floor(Math.random() * countryArray.length)];
  var randomCountry = randomObject.country;
  return randomCountry;
}

//Function that the "randomCountry" chosen above and replaces each string with a "___  " and then displays it in the html header tag with the "countryNameBlanks" ID
function blanksForCountry(word) {
  var blanks = [];
  for (var i = 0; i < word.length; i++) {
    blanks.push("___  ");
  }
  var countryNameBlanks = document.querySelector("#countryNameBlanks");
  countryNameBlanks.innerHTML = blanks.join("");
  return blanks;
}

//function that runs both the chooseRandomWord and blanksForCountry functions and sets all of the variables over again
function gameSetUp() {
  //...run the chooseRandomWord function
  var randomCountry = chooseRandomCountry();
  //then run the blanksForCountry function
  var blanks = blanksForCountry(randomCountry);
  //the array that will hold all of the wrong guessed letters, guesses count
  var lettersGuessed = [];
  var guesses = 15;
  return [randomCountry, blanks, lettersGuessed, guesses];
}

//the array that will hold all of the wrong guessed letters
var lettersGuessed = [];
var guesses = 15;
var wins = 0;

var randomCountry = chooseRandomCountry();
console.log(randomCountry);
var blanks = blanksForCountry(randomCountry);

// This function is run whenever the user presses a key - it saves the user pressed key and compares it to each letter in the country word that was chosen by the computer
document.onkeyup = function () {
  // Determines which key the player pressed - which guess they made - this becomes the playerGuess
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var countryNameBlanks = document.querySelector("#countryNameBlanks");
  var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
  var guessesRemaining = document.querySelector("#guessesRemaining");
  var winsCounty = document.querySelector("#winsCount");
  for (var i = 0; i < randomCountry.length; i++) {
    if (playerGuess == randomCountry[i]) {
      blanks[i] = playerGuess;
      countryNameBlanks.innerHTML = blanks.join("");
    }
  };

  var blankIndex = blanks.indexOf(playerGuess);
  var lettersGuessedIndex = lettersGuessed.indexOf(playerGuess);

  if (blankIndex < 0) {
    if (lettersGuessedIndex < 0) {
      lettersGuessed.push(playerGuess);
      lettersGuessed.push(" ");
      lettersGuessedWrong.innerHTML = lettersGuessed.join("");
      guesses--;
      guessesRemaining.innerHTML = guesses;
    }
  }
  if (blanks.join("") == randomCountry) {
    wins++;
    winsCount.innerHTML = wins;
    var gameRefresh = gameSetUp();
    randomCountry = gameRefresh[0];
    console.log(randomCountry);
    blanks = gameRefresh[1];
    lettersGuessed = gameRefresh[2];
    guesses = gameRefresh[3];
    var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
    lettersGuessedWrong.innerHTML = lettersGuessed.join("");
    var guessesRemaining = document.querySelector("#guessesRemaining");
    guessesRemaining.innerHTML = guesses;
  }
}