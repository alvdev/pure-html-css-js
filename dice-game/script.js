'use strict';

// Roll dice
const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

let curScore = 0;
const playerCurScore = document.querySelector('.current-score');

rollBtn.addEventListener('click', () => {
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceNum}.png`;

  // Sum current score when rolling the dice
  curScore += diceNum;
  playerCurScore.textContent = curScore;
  
  // Stop when roll dice is equal to 1
  if (diceNum === 1) console.log('Need to change player');
});


