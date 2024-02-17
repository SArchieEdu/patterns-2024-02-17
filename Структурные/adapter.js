const player = {
  play() {},
  pause() {},
};

const player2 = {
  start() {},
  stop() {},
};

const browser = "Safari";

let currentPlayer;

if (browser === "Safari") {
  currentPlayer = player;
} else {
  currentPlayer = new Player2Adapter(player2);
}

currentPlayer.play();

class Player2Adapter {
  instance;
  constructor(player) {
    this.instance = player;
  }

  play() {
    this.instance.start();
  }
  pause() {
    this.instance.stop();
  }
}
