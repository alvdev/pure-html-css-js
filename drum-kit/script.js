function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);

  if (audio) {
    audio.play();
    audio.currentTime = 0; // Rewind sound to start to allow press multiple times.
    key.classList.add('play')
  };
}

function removeTransition() {
  this.classList.remove('play');
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
