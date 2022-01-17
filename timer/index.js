const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log('Timer started');
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    currentOffset = (perimeter * timeRemaining) / duration - perimeter;
    circle.setAttribute('stroke-dashoffset', currentOffset);
  },
  onPause() {
    console.log('Timer paused');
  },
  onFinish() {
    console.log('Timer finished');
  },
});
