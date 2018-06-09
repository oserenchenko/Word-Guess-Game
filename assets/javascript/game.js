//Array of country objects - the computer will randomly select one of these and the player will have to guess it
countryArray = [{
    "country": "argentina",
    "outline": "url('assets/images/argentina.png')"
  },
  {
    "country": "bulgaria",
    "outline": "url('assets/images/bulgaria.png')"
  },
  {
    "country": "denmark",
    "outline": "url('assets/images/denmark.png')"
  },
  {
    "country": "ghana",
    "outline": "url('assets/images/ghana.png')"
  },
  {
    "country": "honduras",
    "outline": "url('assets/images/honduras.png')"
  },
  {
    "country": "israel",
    "outline": "url('assets/images/israel.png')"
  },
  {
    "country": "japan",
    "outline": "url('assets/images/japan.png')"
  },
  {
    "country": "mongolia",
    "outline": "url('assets/images/mongolia.png')"
  },
  {
    "country": "myanmar",
    "outline": "url('assets/images/myanmar.png')"
  },
  {
    "country": "philippines",
    "outline": "url('assets/images/philippines.png')"
  },
  {
    "country": "spain",
    "outline": "url('assets/images/spain.png')"
  },
  {
    "country": "sweden",
    "outline": "url('assets/images/sweden.png')"
  },
  {
    "country": "uganda",
    "outline": "url('assets/images/uganda.png')"
  },
  {
    "country": "vietnam",
    "outline": "url('assets/images/vietnam.png')"
  },
  {
    "country": "yemen",
    "outline": "url('assets/images/yemen.png')"
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
//varible that lets the game keep going or makes it stop
gameReady = false;


// Function that lets the computer randomly choose a country object from the countryArray - the country name then becomes "randomCountry"
function chooseRandomCountry() {
  var randomObject = countryArray[Math.floor(Math.random() * countryArray.length)];
  randomCountry = randomObject.country;
  countryOutline = randomObject.outline;
  return [randomCountry, countryOutline];
}

//Function that the "randomCountry" chosen above and replaces each string with a "__  " and then displays it in the html header tag with the "countryNameBlanks" ID
function blanksForCountry(word) {
  var blanks = [];
  for (var i = 0; i < word.length; i++) {
    blanks.push("__  ");
  }
  var countryNameBlanks = document.querySelector("#countryNameBlanks");
  countryNameBlanks.innerHTML = blanks.join("");
  return blanks;
}

//function that runs both the chooseRandomWord and blanksForCountry functions and sets all of the variables over again
function gameSetUp() {
  //calls the choose random country function and sets the country name to the random country variable and the outline local path to the country outline variable
  chooseRandomCountryReturns = chooseRandomCountry()
  randomCountry = chooseRandomCountryReturns[0];
  countryOutline = chooseRandomCountryReturns[1];
  //runs the blanksForCountry function and sets it to the blanks variable 
  blanks = blanksForCountry(randomCountry);
  //resets the global variables
  lettersGuessed = [];
  guesses = 10;
  //pushes all changes to html page
  var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
  lettersGuessedWrong.innerHTML = lettersGuessed.join("");
  var guessesRemaining = document.querySelector("#guessesRemaining");
  guessesRemaining.innerHTML = "Number of guesses remaining: " + guesses;
  //resets the global image after wins and losses
  document.getElementById("countryMapOutline").style.backgroundImage = "url('assets/images/globe.png')";
  document.getElementById("countryMapOutline").style.backgroundSize = "contain";
  document.getElementById("countryMapOutline").style.border = "none";
  //resets the blanks color and size after loss
  countryNameBlanks.style.color = "black";
  countryNameBlanks.style.fontSize = "25px";
  gameReady = true;
}

//sets up the game for the very fist round
gameSetUp();

// This function is run whenever the user presses a key - it saves the user pressed key and compares it to each letter in the country word that was chosen by the computer
document.onkeyup = function () {
  //if gameReady is true, set the player guess
  if (gameReady) {
    // Determines which key the player pressed - which guess they made - this becomes the playerGuess
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  }
  //setting all of the html elements to variable to be changed later
  var countryNameBlanks = document.querySelector("#countryNameBlanks");
  var lettersGuessedWrong = document.querySelector("#lettersGuessedWrong");
  var guessesRemaining = document.querySelector("#guessesRemaining");
  var winsCount = document.querySelector("#winsCount");
  var lossesCount = document.querySelector("#lossesCount");

  //for loop that checks the users guess against each character in the random country variable. If the player guess matches any of the characters in the country, the letter is displayed in the blanks array then updated in html
  for (var i = 0; i < randomCountry.length; i++) {
    if (playerGuess == randomCountry[i]) {
      blanks[i] = playerGuess;
      countryNameBlanks.innerHTML = blanks.join("");
    }
  };

  //setting index variables - seeing if the players guess is in the blanks and letters guessed arrays
  var blankIndex = blanks.indexOf(playerGuess);
  var lettersGuessedIndex = lettersGuessed.indexOf(playerGuess);

  //if the game is ready
  if (gameReady) {
    //if the players guess is not in the blank array...
    if (blankIndex < 0) {
      //and if the players guess is not in the letters guessed array...
      if (lettersGuessedIndex < 0) {
        //if the player still has guesses remaining (guesses out of 10)
        if (guesses > 0) {
          //then add the players guess to the letters guessed array, show it in html, take away a point from guesses, and show that in htm
          lettersGuessed.push(playerGuess);
          lettersGuessed.push(" ");
          lettersGuessedWrong.innerHTML = lettersGuessed.join("");
          guesses--;
          guessesRemaining.innerHTML = "Number of guesses remaining: " + guesses;
        }
      }
    }
  };

  //if the player has run out of guesses
  if (guesses == 0) {
    //if the game is ready
    if (gameReady) {
      //adds a loss to the losses variable, show it in html, show the country the player did not guess in red, and show an image of loser 
      losses++;
      lossesCount.innerHTML = "Losses: " + losses;
      //set the game ready variable to false -- so game does not keep going until it resets
      gameReady = false;
      countryNameBlanks.innerHTML = randomCountry;
      countryNameBlanks.style.color = "red";
      countryNameBlanks.style.fontSize = "40px";
      document.getElementById("countryMapOutline").style.backgroundImage = "url('assets/images/lost.jpg')";
      //after 4 seconds, resets the game
      setTimeout(function () {
        gameSetUp();
      }, 4000);
    }
  };

  //if the blanks array equals the random country (if the player guessed the word)
  if (blanks.join("") == randomCountry) {
    //and if the game is ready
    if (gameReady) {
      //increase the wins counter by one
      wins++;
      winsCount.innerHTML = "Wins: " + wins;
      //set game ready variable to false -- so the game does not keep going until the game resets
      gameReady = false;
      //show the wins count in html, show the country map image with a border
      document.getElementById("countryMapOutline").style.backgroundImage = countryOutline;
      document.getElementById("countryMapOutline").style.backgroundSize = "cover";
      document.getElementById("countryMapOutline").style.border = "1px solid black";
      //reset the game in 4 seconds
      setTimeout(function () {
        gameSetUp();
      }, 4000);
    }
  };
}
