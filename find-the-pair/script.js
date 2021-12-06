const colors = [
  'crimson',
  'darkorange',
  'orange',
  'forestgreen',
  'dodgerblue',
  'royalblue',
  'violet',
  'blueviolet',
];

const h1 = document.querySelector('h1');
const container = document.querySelector('#boxes');

const changeColor = function() {
  h1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = color;
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}
