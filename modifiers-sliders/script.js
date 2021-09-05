const inputs = document.querySelectorAll('.controls input');

function updateInput() {
  const px = this.dataset.size || '';
  const picture = document.querySelector('.picture');

  picture.style.setProperty(`--${this.id}`, this.value + px);
}

for (let input of inputs) input.addEventListener('change', updateInput);
