'use strict';

const modalBtns = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');

const showModal = () => {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};

const hideModal = () => {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
}

// Show modal
for (let btn of modalBtns) btn.addEventListener('click', showModal);

// Hide modal
closeBtn.addEventListener('click', hideModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') hideModal();
});

