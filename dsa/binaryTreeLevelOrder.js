class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
  }
  
  const root = new Node(5);
  root.left = new Node(12);
  root.right = new Node(13);
  
  root.left.left = new Node(7);
  root.left.right = new Node(14);
  
  root.right.right = new Node(2);
  
  root.left.left.left = new Node(17);
  root.left.left.right = new Node(23);
  
  root.left.right.left = new Node(27);
  root.left.right.right = new Node(3);
  
  root.right.right.left = new Node(8);
  root.right.right.right = new Node(11);
  
  function levelOrder(root) {
    if(!root) return []
    const q = [root]
    const result = []
    let currentLevel = 0;
    while (q.length > 0) {
       let length = q.length
       result.push([])
      for(let i = 0; i < length;i++) {
        let node = q.shift()
         result[currentLevel].push(node.data)
         if(node.left) {
          q.push(node.left)
         }
         if(node.right) {
          q.push(node.right)
         }
      }
      currentLevel++
    }
    return result
  }
  
  console.log(levelOrder(root))