class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
  }
  
  function ceil(node,target) {
    if(node === null) {
      return null
    }
    if(node.data === target) {
      return node.data
    } 
    if(node.data < target) {
     return ceil(node.right,target)
    }
    const ceilFromLeft = ceil(node.left,target)
    if(!ceilFromLeft) {
      return node.data
    } else {
      return ceilFromLeft
    }
  }
  
  
  
  // Representation of the given tree
  //       10
  //       / \
  //      5  15
  //         / \
  //        12 30 
  let root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(15);
  root.right.left = new Node(12);
  root.right.right = new Node(30);
  
  
  let x = 14;
  console.log(ceil(root, x));