class TreeNode {
    constructor(value)  {
      this.value = value
      this.left = null
      this.right = null
    }
   
  }
  
  // const root = new TreeNode(20)
  // root.left = new TreeNode(10)
  // root.right = new TreeNode(25)
  // root.left.left = new TreeNode(7)
  // root.left.right = new TreeNode(8)
  // root.right.left = new TreeNode(22)
  // root.right.right = new TreeNode(28)
  
  // const tree1 = new TreeNode(15);
  // tree1.left = new TreeNode(10);
  // tree1.right = new TreeNode(20);
  
  // const tree2 = new TreeNode(10);
  // tree2.right = new TreeNode(20);
  // tree2.right.right = new TreeNode(30);
  
  // const tree3 = new TreeNode(30);
  // tree3.left = new TreeNode(20);
  // tree3.left.left = new TreeNode(10);
  
  // const tree4 = new TreeNode(50);
  // tree4.left = new TreeNode(30);
  // tree4.right = new TreeNode(70);
  // tree4.left.left = new TreeNode(20);
  // tree4.left.right = new TreeNode(40);
  // tree4.right.left = new TreeNode(60);
  // tree4.right.right = new TreeNode(80);
  
  // const tree5 = new TreeNode(50);
  // tree5.left = new TreeNode(30);
  // tree5.right = new TreeNode(70);
  // tree5.right.left = new TreeNode(60);
  
  // const tree6 = new TreeNode(10);
  // tree6.right = new TreeNode(20);
  
  // const tree7 = new TreeNode(10);
  
  // const tree8 = new TreeNode(40);
  // tree8.left = new TreeNode(20);
  // tree8.right = new TreeNode(60);
  // tree8.left.left = new TreeNode(10);
  // tree8.left.right = new TreeNode(30);
  // tree8.right.left = new TreeNode(50);
  // tree8.right.right = new TreeNode(70);
  // tree8.left.right.left = new TreeNode(25);
  
  // const tree9 = new TreeNode(30);
  // tree9.left = new TreeNode(20);
  // tree9.left.left = new TreeNode(10);
  // tree9.left.left.left = new TreeNode(5);
  
  
  const tree10 = new TreeNode(10);
  tree10.right = new TreeNode(20);
  tree10.right.right = new TreeNode(30);
  tree10.right.right.right = new TreeNode(40);
  
  
  function secondLargestElement(root) {
    const result = [-1]
    const count = [0]
    reverseInorder(root,count,result)
    console.log(result[0])
  }
  
  
  function reverseInorder(root,count,result) {
        if(!root) {
          return;
        }
      reverseInorder(root.right,count,result)
      count[0]++
      if (count[0]===2) {
        result[0] = root.value
        return
      }  
      reverseInorder(root.left,count,result)
  }
  secondLargestElement(tree10)