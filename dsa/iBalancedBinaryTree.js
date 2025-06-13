class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
  }
  
  function Height(node) {
    if(!node) return -1
    let leftHeight = Height(node.left)
    let rightHeight = Height(node.right)
    let max = Math.max(leftHeight,rightHeight)
    return 1 + max
  }
  
  function isBalanced(root) {
    if(!root) {
      return true
    }
    let leftHeight = Height(root.left)
    let rightHeight = Height(root.right)
    console.log(leftHeight)
    console.log(rightHeight)
    if(Math.abs(leftHeight - rightHeight) > 1) {
      return false
    }
    return true
   } 
  
  
   let root = new Node(1);
   root.left = new Node(2);
   root.right = new Node(3);
   root.left.left = new Node(4);
   root.left.right = new Node(5);
  console.log(isBalanced(root) ? "True" : "False");