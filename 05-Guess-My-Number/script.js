'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(console.log(document.querySelector('.guess').value));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const setBackground = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};
const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input (0 is a falsy value so False, inverting it with ! makes it True, triggering the condition)
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // when a player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    //document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    //document.querySelector('body').style.backgroundColor = '#60b347';
    setBackground('#60b347');
    //document.querySelector('.number').style.width = '30rem';
    setNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      //document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  // another good form of DRY is to create functions. when you select a line of code, VS code highlights all identical lines.
  /* 
/// DRY DON'T REPEAT YOURSELF -- we will refactor these two blocks of almost identical code so they don't repeat. both trigger when guess is NOT equal to secretNumber.
// when guess is too high
  }else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    
  }
  */
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
/*
// 1.
document.querySelector('.again').addEventListener('click', function () {
  // 2. to do this we also need to change the const to let at the definition of secret number at the top
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // 3.
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = 0; // this 0 should have been '' an empty string because now it will display 0 which is not what the initial display is.
  // 4.
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/
// Solution;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.score').textContent = score;
  displayScore(score);
  //document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';

  //document.querySelector('body').style.backgroundColor = '#222';
  setBackground('#222');
  //document.querySelector('.number').style.width = '15rem';
  setNumberWidth('15rem');
});
