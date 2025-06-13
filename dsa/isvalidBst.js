class TreeNode {
    constructor(value) {
     this.value = value
     this.left = null
     this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
   insert(value) {
      const newNode = new TreeNode(value)
      if(!this.root) {
        this.root = newNode
      } else {
        this.insertNode(this.root,newNode)
      }
   } 
   insertNode(node,newNode) {
      if(node.value > newNode.value) {
        if(node.left === null) {
            node.left = newNode
            return 
        } else {
            this.insertNode(node.left,newNode)
        }
      } else {
        if(node.right === null) {
            node.right = newNode
            return
        } else {
            this.insertNode(node.right,newNode)
        }
      }
   }
    inorder(root=this.root) {
    if(root) {
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }
   }
   preorder(root=this.root) {
    if(root) {
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right)
    }
   }
   postorder(root=this.root) {
    if(root) {
       this.postorder(root.left)
       this.postorder(root.right)
       console.log(root.value)
    }
   }
}


// const bst = new BST()
// bst.insert(40)
// bst.insert(50)
// bst.insert(60)
// bst.insert(15)
// bst.insert(30)
// bst.insert(1)

// const root = new TreeNode(40);
// root.left = new TreeNode(15);
// root.right = new TreeNode(50);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(60);


function isValid(node) {
  let valid_bst = true
  let prev_node = new TreeNode(-Infinity)
  function inorder(node) {
    if(!node || !valid_bst) {
        return null
    }
    inorder(node.left)
    if(node.value <= prev_node.value) {
        valid_bst = false
    }
    prev_node = node
    inorder(node.right)

  }
  inorder(node)
  return valid_bst
}

console.log(isValid(root))