                            
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


// Sample tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6); 
root.right.right.right = new Node(8)                           
                        

function depth(node) {
 const q = [node]
 let level = 0
 while(q.length > 0) {
     let levelSize = q.length
     for (let index = 0; index < levelSize; index++) {
         let node = q.shift()
         if(node.left) q.push(node.left)
         if(node.right) q.push(node.right)           
     }
   level++  
 }
return level
}

function maxDepthDFS(node) {
    if (!node) return 0;
    const leftDepth = maxDepthDFS(node.left);
    const rightDepth = maxDepthDFS(node.right);
    debugger
    console.log("leftDepth",leftDepth)
    debugger
    console.log("rightDepth",rightDepth)
    const max = 1 + Math.max(leftDepth, rightDepth);
    debugger
    console.log("max",max)
    return max
  }
console.log(maxDepthDFS(root))  