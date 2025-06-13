class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
  }
  
  // Representation of input binary search tree
  //        5
  //       / \
  //      4   6
  //     /     \
  //    3       7
  //   /
  //  1
  let root = new Node(5);
  root.left = new Node(4);
  root.right = new Node(6);
  root.left.left = new Node(3);
  root.right.right = new Node(7);
  root.left.left.left = new Node(1);
  
  function findMax(root) {
    while (root.right) {
      root = root.right
    }
    return root.data
  }
  
  console.log(findMax(root))