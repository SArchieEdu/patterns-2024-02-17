// const StorageNode = {
//   level: 12,
//   type: "oil",
//   //...
//   clone() {
//     return {
//       level: 0,
//       type: this.type,
//     };
//   },
// };

// const StorageCopy = {
//   ...StorageNode,
// };

interface NodeWithClone<Node> {
  clone(): Node;
}
type NodeWithClone2<Node> = {
  clone(): Node;
};

class StorageNode implements NodeWithClone<StorageNode> {
  constructor() {}
  clone() {
    return new StorageNode();
  }
}
