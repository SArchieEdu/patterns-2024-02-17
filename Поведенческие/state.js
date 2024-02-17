const playerStates = ["initializing", "ready", "playing", "pause", "end"];

const player = {
  state: initializingState,

  initialize() {
    this.state = this.state.initialize();
  },

  play() {
    this.state = this.state.play();
  },

  pause() {
    this.state = this.state.pause();
  },
};

const initializingState = {
  initialize() {
    return readyState;
  },

  play() {
    return this;
  },

  pause() {
    return this;
  },
};

const readyState = {
  initialize() {
    return this;
  },
  play() {
    return playState;
  },

  pause() {
    return this;
  },
};

const playState = {
  initialize() {
    return this;
  },
  play() {
    return this;
  },

  pause() {
    return pauseState;
  },
};

const pauseState = {
  initialize() {
    return this;
  },
  play() {
    return playState;
  },

  pause() {
    return this;
  },
};
