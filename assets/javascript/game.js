//Array of country objects - the computer will randomly select one of these and the player will have to guess it
countryArray = [{
    "country": "argentina"
    // "outline":
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
    "country": "yemen",
  }
];

//Setting global variables
//random country will hold the country name the computer randomly selected
var randomCountry;
//the variable country outline that will hold the image for the country map chosen
var countryOutline;
//blanks is an array that will hold the number of letters in the random country as '___'
var blanks = [];
//the array that will hold all of the wrong guessed letters, guesses count
var lettersGuessed = [];
//variable guesses that will hold the amount of guesses remaining
var guesses;
//variable wins that shows how many times the user has guessed the correct country
var wins = 0;
//variable losses that shows how many times the user has guessed the incorrect country
var losses = 0;


// Function that lets the computer randomly choose a country object from the countryArray - the country name then becomes "randomCountry"
function chooseRandomCountry() {
  var randomObject = countryArray[Math.floor(Math.random() * countryArray.length)];
  randomCountry = randomObject.country;
  countryOutline = randomObject.outline;
  return [randomCountry, countryOutline];
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
  chooseRandomCountryReturns = chooseRandomCountry()
  //...run the chooseRandomWord function
  randomCountry = chooseRandomCountryReturns[0];
  countryOutline = chooseRandomCountryReturns[1];
  //then run the blanksForCountry function
  blanks = blanksForCountry(randomCountry);
  lettersGuessed = [];
  guesses = 10;
  var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
  lettersGuessedWrong.innerHTML = lettersGuessed.join("");
  var guessesRemaining = document.querySelector("#guessesRemaining");
  guessesRemaining.innerHTML = "Number of guesses remaining: " + guesses;
  console.log(randomCountry);
}

gameSetUp();

// This function is run whenever the user presses a key - it saves the user pressed key and compares it to each letter in the country word that was chosen by the computer
document.onkeyup = function () {
  // Determines which key the player pressed - which guess they made - this becomes the playerGuess
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var countryNameBlanks = document.querySelector("#countryNameBlanks");
  var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
  var guessesRemaining = document.querySelector("#guessesRemaining");
  var winsCount = document.querySelector("#winsCount");
  var lossesCount = document.querySelector("#lossesCount");
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
      guessesRemaining.innerHTML = "Number of guesses remaining: " + guesses;
    }
    if (guesses == 0) {
      losses++;
      lossesCount.innerHTML = "Losses: " + losses;
      gameSetUp();
    }
  }
  if (blanks.join("") == randomCountry) {
    wins++;
    winsCount.innerHTML = "Wins: " + wins;
    document.getElementById("countryMapOutline").style.backgroundImage = countryOutline;
    gameSetUp();
  }
}

//set time out
// document.getElementById("country").style.backgroundImage = countryArray[i].outline;