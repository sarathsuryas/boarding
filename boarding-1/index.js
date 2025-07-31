class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
}

class BST {
    constructor() {
      this.root = null;
      this.previous = null
    }
   isValid(current = this.root) {
      if(!current) {
        return true
      }
     if(!this.isValid(current.left)) {
        return false
     } 
     if(this.previous!==null && this.previous >= current.value) {
        return false
     }
    this.previous = current.value
    return this.isValid(current.right) 
   }

}


const bst = new BST()
bst.root = new Node(11)
bst.root.left = new Node(12)
bst.root.right = new Node(10)
bst.root.left.left = new Node(13)
bst.root.left.right = new Node(16)

console.log(bst.isValid())

const bst2 = new BST();
bst2.root = new Node(10);
bst2.root.left = new Node(5);
bst2.root.right = new Node(15);
bst2.root.left.left = new Node(3);
bst2.root.left.right = new Node(7);
bst2.root.right.left = new Node(12);
bst2.root.right.right = new Node(18);

console.log(bst2.isValid()); //Output: true