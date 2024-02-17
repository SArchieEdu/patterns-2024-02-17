const skin = {
  player,

  play() {
    this.player.play();
  },
  pause() {
    this.player.pause();
  },
};

const player = {
  play() {},
  pause() {},
};

class GreenCircle {}

class RedCircle {}

class BlueCircle {}

class GreenTriangle {}

class RedTriangle {}

class BlueTriangle {}

class Triangle {
  color;
  constructor(color) {
    this.color = color;
  }
}

class Circle {
  color;
  constructor(color) {
    this.color = color;
  }
}

class Green {}

class Red {}

class Blue {}

new Circle(new Red());
