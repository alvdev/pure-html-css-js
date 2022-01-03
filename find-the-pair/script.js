const colors = [
  'crimson',
  'darkorange',
  'forestgreen',
  'royalblue',
  'purple',
  'blueviolet',
  'gold',
  'violet',
];

const h1 = document.querySelector('h1');
const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = color;
  container.appendChild(box);
  box.addEventListener('click', () => {
    h1.style.color = box.style.backgroundColor;
  });
}
