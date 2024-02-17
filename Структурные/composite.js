class Node {
  paint() {}
}

class NodeContainer {
  children = [];
  add(...node) {
    this.children.push(...node);
    return this;
  }
  paint() {
    this.children.forEach((node) => node.paint());
  }
}

class StorageNode {
  children = [];
  add(...node) {
    this.children.push(...node);
    return this;
  }
  paint() {
    this.children.forEach((node) => node.paint());
  }
}

class CarNode {
  paint() {}
}

const storageNode = new StorageNode();
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();
const node5 = new Node();
const container1 = new NodeContainer();
const container2 = new NodeContainer();
const container3 = new NodeContainer();
const car1 = new CarNode();
const car2 = new CarNode();
const car3 = new CarNode();

storageNode.add(container1, node1, node3, node5);
container1.add(container2, node2, car1);
container2.add(container3, node4, car2);
container3.add(car3);

storageNode.paint();
