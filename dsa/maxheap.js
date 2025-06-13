class MaxHeap {
    constructor() {
      this.values = []
    }
    parent(index){
      return Math.floor((index - 1) / 2)
    }
    leftChild(index) {
      return (index * 2) + 1;
    }
    rightChild(index) {
      return (index * 2) + 2;
    }
    isLeaf(index) {
      return (
        index >= Math.floor((this.values.length) / 2) && index <= this.values.length-1
      )
    }
    add(element) {
      this.values.push(element)
      this.heapifyUp(this.values.length-1)
    }
    swap(index1,index2) {
      [this.values[index1],this.values[index2]] = [this.values[index2],this.values[index1]]
    }
    heapifyUp(index) {
        let currentIndex = index
        let parentIndex = this.parent(index)
        while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
           this.swap(currentIndex,parentIndex)
           currentIndex = parentIndex
           parentIndex = this.parent(currentIndex)
        }
    }
    extractFromMax() {
      if(this.values.length < 1) return "heap is empty"
      let end = this.values.pop()
      let max = this.values[0]
      this.values[0] = end
      this.heapifyDown(0)
      return max
    }
    heapifyDown(index) {
      debugger 
      console.log('index',index)
      if(!this.isLeaf(index)) {
        let leftChildIndex = this.leftChild(index)
        debugger
        console.log('leftChildIndex',leftChildIndex)
        let rightChildIndex = this.rightChild(index)
        debugger
        console.log('rightChildIndex',rightChildIndex)
        let largeIndex = index
        debugger
        console.log("largeIndex",largeIndex)
        debugger
        console.log('output array ',this.values)
        if(this.values[leftChildIndex] > this.values[largeIndex]) {
          largeIndex = leftChildIndex
        } 
         if(this.values[rightChildIndex] > this.values[largeIndex]) {
          largeIndex = rightChildIndex
        }
        if(index !== largeIndex) {
          this.swap(index,largeIndex)
          this.heapifyDown(largeIndex)
        }
      }
    }
    buildHeap(array) {
      this.values = array;
      // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
      for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
       
          this.heapifyDown(i);
      }
  }
  }
  
  const h = new MaxHeap()
  h.add(3)
  h.add(10)
  h.add(15)
  h.add(16)
  h.add(1)
  h.add(40)
  
  // console.log(h.extractFromMax())
  h.buildHeap([3, 9, 2, 1, 4, 5])
  console.log(h.values)