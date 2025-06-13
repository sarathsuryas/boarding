class TreeNode {
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  const root = new TreeNode(25)
  root.left = new TreeNode(20)
  root.right = new TreeNode(30)
  root.left.left = new TreeNode(15)
  root.left.right = new TreeNode(24)
  root.right =  new TreeNode(30)
  root.right.left = new TreeNode(26)
  root.right.right = new TreeNode(35)
  
  function countLeaf(root) {
   if(root == null) {
    return 0
   }
   if(root.left === null && root.right ===  null) {
    return  1
   }
   const left = countLeaf(root.left)
   const right = countLeaf(root.right)
   sum = left + right
   return sum
  }
         
  console.log(countLeaf(root))