// Node structure
class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(5);
root.left = new Node(10);
root.right = new Node(15);
root.left.left = new Node(20);
root.left.right = new Node(25);
root.left.right.right = new Node(45);
root.right.left = new Node(30);
root.right.right = new Node(35);

let k = 10;

function findDepth(node,target) {
  
    if(!node) return -1
    if(node.data === target) return 0
    const leftDepth = findDepth(node.left,target)
    if(leftDepth !== -1) {
        return leftDepth + 1
    }
    const rightDepth = findDepth(node.right,target)
    if(rightDepth !== -1) {
        return rightDepth + 1
    }
    return -1
}


console.log(findDepth(root,10))


/// bfs implementation
// function findDepthAndHeight(node, target) {
//       let q = [node]
//       let level = 0
//       let height = -1
//       let depth = 0
//       while (q.length > 0) {
//         let length = q.length
//         for (let i = 0; i < length; i++) {
//            let curr = q.shift()
//            if(curr.data === target) {
//               depth = level
//            }  
//            if(curr.left) q.push(curr.left)
//            if(curr.right) q.push(curr.right)
//         }
//         level++
//       }
//      console.log(depth)
//      console.log(height = level - depth - 1)
// }

