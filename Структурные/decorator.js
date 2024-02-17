const player = {
  play() {},
  pause() {},
};

class PlayerAdDecorator {
  instance;
  constructor(player) {
    this.instance = player;
  }

  play() {
    this.player.play();
  }
  pause() {
    this.player.play();
  }

  playAd() {}
}

class PlayerTrackerDecorator {
  instance;
  constructor(player) {
    this.instance = player;
  }

  play() {
    this.sendTrackings();
    this.player.play();
  }
  pause() {
    this.sendTrackings();
    this.player.play();
  }

  sendTrackings() {}
}
class PlayerLoggerDecorator {
  instance;
  constructor(player) {
    this.instance = player;
  }

  play() {
    this.sendLog();
    this.player.play();
  }
  pause() {
    this.sendLog();
    this.player.play();
  }

  sendLog() {}
}

new PlayerAdDecorator(player);
new PlayerTrackerDecorator(new PlayerLoggerDecorator(player));

const adPlayer = {
  instance: player,

  play() {
    this.player.play();
  },
  pause() {
    this.player.play();
  },

  playAd() {},
};
