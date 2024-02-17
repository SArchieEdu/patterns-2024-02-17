const RootNode = {
  title: "",
  accept(visitor) {
    visitor.visitRootNode(this);
  },
};

const StorageNode1 = {
  level: 12,

  accept(visitor) {
    visitor.visitStorageNode(this);
  },
};
const StorageNode2 = {
  level: 12,

  accept(visitor) {
    visitor.visitStorageNode(this);
  },
};

const Builder = {
  result: {
    level,
  },
  setRootTitle(title) {
    this.result.nodeTitle = title;
  },
  setLevel(level) {
    this.result.level += level;
  },
};

const PdFVisitor = {
  builder: Builder,
  visitStorageNode(node) {
    this.builder.setLevel = node.level;
  },
  visitRootNode(node) {
    this.builder.setRootTitle = node.title;
  },
};

for (node of tree) {
  node.accept(PdFVisitor);
}

Builder.result;
