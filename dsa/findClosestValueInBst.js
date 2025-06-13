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


const bst = new BST()
bst.insert(40)
bst.insert(50)
bst.insert(60)
bst.insert(15)
bst.insert(30)
bst.insert(1)
bst.inorder()

function findClosestValue(target,node) {
let closest = node.value
let current = node
while (current) {
    if(Math.abs(current.value - target) < Math.abs(closest - target)) {
        closest = current.value
    }
    if(target < current.value) {
        current = current.left
    } else {
        current = current.right
    }
}
return closest
}

function findClosestRec(node,target,closest) {
  if(!node) {
    return closest
  }
  if(Math.abs(target-node.value) < Math.abs(target-closest)) {
    closest = node.value
  }
   
  if(target < node.value) {
    return findClosestRec(node.left,target,closest)
  } else {
    return findClosestRec(node.right,target,closest)
  }
}

console.log("closest value",findClosestRec(bst.root,56,bst.root.value))