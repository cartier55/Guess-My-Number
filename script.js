'use strict';
/*
// Grab page element from css selector
//document.querySelector()
console.log(document.querySelector('.message'));
// Grab text from page element not entier tag
// .textcontent
console.log(document.querySelector('.message').textContent);

// Document Obj is the entry point to the html document
// Refrence Dom Tree
*/
// App Starting State
let secNumber;
let currScore;
let highscore = 0;
let getStartingProp = () => {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  currScore = 20;
  console.log(secNumber);
};
getStartingProp();
document.querySelector('.check').addEventListener('click', checkClickFunc);
document.querySelector('.again').addEventListener('click', resetClickFunc);
function checkClickFunc() {
  const guess = Number(document.querySelector('.guess').value);
  // When There is No User Input
  if (!guess) {
    document.querySelector('.message').textContent = 'Done Guessing😞???';
    // When user enters the correct number
  } else if (guess === secNumber) {
    highscore += currScore;
    document.querySelector('.message').textContent = 'Correct Guess😊!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secNumber;
    document.querySelector('.highscore').textContent = highscore;
    // Wheen User enters inccorect Number
  } else if (guess !== secNumber) {
    if (currScore > 1) {
      document.querySelector('.message').textContent =
        guess > secNumber ? 'Guess Too High' : 'Guess Too Low';
      currScore--;
      document.querySelector('.score').textContent = currScore;
    } else {
      document.querySelector('.message').textContent = "YOU'VE LOST";
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background = 'red';
    }
  }
}

function resetClickFunc() {
  document.querySelector('body').style.background = '#222';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.width = '15rem';

  getStartingProp();
}
