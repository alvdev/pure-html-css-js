const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onPause() {
    console.log('Timer paused');
  },
  onFinish() {
    console.log('Timer finished');
  },
});
