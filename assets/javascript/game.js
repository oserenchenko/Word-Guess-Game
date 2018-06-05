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

//function that runs both the chooseRandomWord and blanksForCountry functions -- this function will run when the space bar is clicked
function onSpaceClick() {
  //...run the chooseRandomWord function
  var randomCountry = chooseRandomCountry();
  //then run the blanksForCountry function
  var blanks = blanksForCountry(randomCountry);
  return [randomCountry, blanks];
}

//when the spacebar is selected, the above onSpaceClick function is run BROKEN FOR NOW!!! NOT USING
// document.body.onkeyup = function (e) {
//   if (e.keyCode == 32) {
//     onSpaceClick();
//   }
// };

//the random word and the blanks generated by the onSpaceClick function are saved as variables
var spaceFunctionResults = onSpaceClick();
var randomCountry = spaceFunctionResults[0];
console.log(randomCountry); //console logging the random country word chosen for troubleshooting
var blanks = spaceFunctionResults[1];

//the array that will hold all of the wrong guessed letters
lettersGuessed = [];

// This function is run whenever the user presses a key - it saves the user pressed key and compares it to each letter in the country word that was chosen by the computer
document.onkeyup = function () {
    // Determines which key the player pressed - which guess they made - this becomes the playerGuess
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerGuess);
    var countryNameBlanks = document.querySelector("#countryNameBlanks");
    var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
    var guessesRemaining = document.querySelector("#guessesRemaining");
    console.log(lettersGuessed);
    for (var i = 0; i < randomCountry.length; i++) {
      if (playerGuess == randomCountry[i]) {
        blanks[i] = playerGuess;
        countryNameBlanks.innerHTML = blanks.join("");
      } else if (playerGuess != randomCountry[i]) {
        if (lettersGuessed.indexOf(playerGuess) < 0) {
          lettersGuessed.push(playerGuess);
          console.log(lettersGuessed);
          lettersGuessedWrong.innerHTML = lettersGuessed;
        }
      }
    }
  }