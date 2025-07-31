class MinHeap {
    constructor() {
        this.values = [] 
    }
   parent(i) {
     return Math.floor((i - 1) / 2)
   } 
   leftChild(i) {
    return  (2 * i) + 1
   }
   rightChild(i) {
    return (i * 2) + 2
   }
   swap(index1,index2) {
    [this.values[index1],this.values[index2]] = [this.values[index2],this.values[index1]]
   }
   isLeaf(i) {
    return this.values.length-1 > i
   }
}