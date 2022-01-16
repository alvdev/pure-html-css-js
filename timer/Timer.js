class Timer {
  constructor(durationInput, startButton, pauseButton, callback) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callback) {
      this.onStart = callback.onStart;
      this.onTick = callback.onTick;
      this.onPause = callback.onPause;
      this.onFinish = callback.onFinish;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 20);
    if (this.onStart) this.onStart(this.timeRemaining);
  };

  pause = () => {
    clearInterval(this.interval);
    if (this.onPause) this.onPause();
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onFinish) this.onFinish();
    } else {
      this.timeRemaining = this.durationInput.value - 0.02;
      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
