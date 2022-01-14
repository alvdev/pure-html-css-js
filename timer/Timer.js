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
    this.interval = setInterval(this.tick, 50);
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
      this.durationInput.value = (this.durationInput.value - 0.05).toFixed(2);
    }
  };

  get timeRemaining() {
    return this.timeRemaining;
  }

  set timeRemaining(durationInputs) {
    this.durationInput.value;
  }
}
