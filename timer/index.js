class Timer {
  constructor(durationInput, startButton, pauseButton, callback) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callback) {
      this.onStart = callback.onStart;
      this.onPause = callback.onPause;
      this.onFinish = callback.onFinish;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    if (this.onStart) this.onStart();
  };

  pause = () => {
    clearInterval(this.interval);
    if (this.onPause) this.onPause();
  };

  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    if (timeRemaining === 0) {
      this.pause;
      if (this.onFinish) this.onFinish();
    } else {
      this.durationInput.value = this.durationInput.value - 1;
    }
  };

  get timeRemaining() {
    return this.timeRemaining;
    console.log('Remaining time');
  }

  set timeRemaining(durationInput) {
    this.durationInput.value;
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

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
