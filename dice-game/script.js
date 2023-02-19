'use strict';

// Roll dice
const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

rollBtn.addEventListener('click', () => {
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceNum}.png`;
  console.log('This is working');
})
