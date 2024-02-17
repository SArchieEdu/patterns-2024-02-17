const facade = {
  player,
  AdPlanner,

  play() {
    if (this.player.activeStream) {
      this.playAd.then(() => {
        this.player.returnToAit();
        this.player.play();
      });
    }
  },

  pause() {},
};

const AdPlanner = {
  playAd() {
    return new Promise();
  },
};

const player = {
  activeStream: "",
  play() {},
  pause() {},
  returnToAit() {},
};
