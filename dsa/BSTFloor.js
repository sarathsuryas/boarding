class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
  }
  
  function floor(node,target) {
    let floorValue = -1
    while (node) {
      if(node.data === target) {
        return node.data
      }
      if(node.data > target) {
        node = node.left
      } else {
         floorValue = node.data
         node = node.right
      }
    }
    return floorValue
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
  
  
  let x = 31;
  console.log(floor(root, x));