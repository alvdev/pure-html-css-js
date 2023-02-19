'use strict';

// Roll dice
const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

const rollDice = () => {
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceNum}.png`;
  console.log(`This is working - ${diceNum}`);
}

rollBtn.addEventListener('click', rollDice);


