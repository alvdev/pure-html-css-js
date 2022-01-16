const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');

let currentOffset = 0;
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log('Timer started');
    console.log(perimeter);
    duration = totalDuration;
    console.log(duration + 'el tiempo que falta');
    circle.setAttribute('stroke-dasharray', perimeter);
  },
  onTick(timeRemaining) {
    //console.log('on tick');
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset = (perimeter * timeRemaining) / duration - perimeter;
  },
  onPause() {
    console.log('Timer paused');
  },
  onFinish() {
    console.log('Timer finished');
  },
});
