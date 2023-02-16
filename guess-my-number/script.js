'use strict';

// Select neccessary elements to interact
const again = document.querySelector('button.again');
const check = document.querySelector('button.check');
const guess = document.querySelector('input.guess');

// Number to guess between 1 and 20
const number = Math.trunc(Math.random() * 20) + 1;
