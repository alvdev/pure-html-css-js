'use strict';

// Select neccessary elements to interact
const again = document.querySelector('button.again');
const check = document.querySelector('button.check');
const guess = document.querySelector('input.guess');
const message = document.querySelector('.message');

let score = document.querySelector('.score');
let scoreNumber = +score.textContent;

const placeholder = document.querySelector('.number');

// Number to guess between 1 and 20
const number = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', () => {
  if (!guess.value) {
    message.textContent = 'Enter a number';
  } else if (+guess.value !== number) {
    scoreNumber--;
    score.textContent = scoreNumber <= 0 ? 'You lost' : scoreNumber;
    guess.disabled = scoreNumber <=0 ? true : false;
  } else if (+guess.value === number) {
    message.textContent = 'You guessed it!';
    document.body.style.backgroundColor = 'forestgreen';
  }
})
