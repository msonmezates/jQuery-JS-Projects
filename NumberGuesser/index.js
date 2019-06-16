/*
Game Rules
  - Player must guess a number betwen min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct guesses if loose
  - Let player choose to play again
*/

// Game rules
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const gameWrapper = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-button"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign min and max numbers
minNum.textContent = min;
maxNum.textContent = max;

// Listen for play again
gameWrapper.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload()
  }
});

// Listen for guess
guessBtn.addEventListener('click', function (e) {
  let guess = parseInt(guessInput.value);
  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    // Show error message
    showMessage(`Please enter a number between ${min} and ${max}!`, 'red');
  } else {
    // If player guesses right
    if (guess === winningNum) {
      gameOver(true);
    } else {
      // If player guesses wrong
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        // Game over
        gameOver(false);
      } else {
        // wrong answer but game continues
        if (guessesLeft > 1) {
          showMessage(`${guess} is not correct! You have ${guessesLeft} left!`, 'red');
        } else {
          showMessage(`${guess} is not correct! You have only 1 guess left!`, 'red');
        }
      }
    }
    guessInput.value = '';
  }
});

// Show message
function showMessage(msg, colorVal) {
  message.textContent = msg;
  message.style.color = colorVal;
}

// Game over
function gameOver(won, msg) {
  const color = won === true ? 'green' : 'red';
  const message = won === true ?
    `You guessed it. ${winningNum} is correct!` :
    `Game over, you lost! The correct number was ${winningNum}.`;
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  showMessage(message, color);

  // Play Again
  guessBtn.value = 'Play Again!';
  guessBtn.className = 'play-again';
}

// Generate a number randomly
function getRandomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}