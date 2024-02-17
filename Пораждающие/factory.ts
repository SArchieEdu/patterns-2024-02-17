function createPlayer(version) {
  return {
    play: () => {},
    pause: () => {},
  };
}

function createShakaPlayer(version) {
  return {
    play: () => {},
    pause: () => {},
  };
}

class PlayerFactory {
  createPlayer() {
    return {
      play: () => {},
      pause: () => {},
    };
  }
}

class CustomPlayerFactory extends PlayerFactory {
  createPlayer() {
    return {
      play: () => {
        console.log("Play");
      },
      pause: () => {},
    };
  }
}

class ShakaPlayerFactory extends PlayerFactory {
  createPlayer() {
    return {
      play: () => {},
      pause: () => {
        console.log("Pause");
      },
    };
  }
}

function createPlayer(factory) {
  factory.createPLayer();
}

createPlayer(new ShakaPlayerFactory());
createPlayer(new CustomPlayerFactory());

interface Ui {
  createButton(): {};
  createTable(): {};
  createInput(): {};
}

class KinopoiskUi implements Ui {
  createButton() {}
  createTable() {}
  createInput() {}
}

class MusicUi implements Ui {
  createButton() {}
  createTable() {}
  createInput() {}
}
