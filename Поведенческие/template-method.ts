export abstract class Bank {
  calculate() {
    this.calculateA();
    this.calculateB();
    this.calculateC();
    this.calculateD();
  }

  abstract calculateA();
  abstract calculateB();
  abstract calculateC();
  abstract calculateD();
}

class MyBank extends Bank {
  calculateA() {
    return 1;
  }
  calculateB() {
    return 2;
  }
  calculateC() {
    return 3;
  }
  calculateD() {
    return 4;
  }
}

abstract class Node {
  constructor() {}

  initializeNode() {
    this.calculateSize();
    this.paint();
  }

  abstract paint();
  abstract calculateSize();
}

class CarNode extends Node {
  paint() {
    console.log("paint");
  }

  calculateSize() {
    return 25;
  }
}
