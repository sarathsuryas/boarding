class MinHeap {
    constructor() {
      this.values = []
    }
    parent(index) {
      return Math.floor((index - 1) / 2);
    }
    leftChild(index) {
      return (index * 2) + 1;
    }
    rightChild(index) {
      return (index * 2) + 2;
    }
    isLeaf(index) {
      return (
        index >= Math.floor((this.values.length)/2) && index <= this.values.length-1
      )
    }
    swap(index1,index2) {
      [this.values[index1],this.values[index2]] = [this.values[index2],this.values[index1]]
    }
    add(element) {
      this.values.push(element)
      this.heapifyUp(this.values.length-1)
    }
    heapifyUp(index){
      let parent = this.parent(index)
      let current = index
      while(this.values.length > 1 && this.values[parent] > this.values[current]) {
        this.swap(current,parent)
        current = parent
        parent = this.parent(current)
      }
    }
    extractMIn() {
      const end = this.values.pop()
      const min = this.values[0]
      this.values[0] = end
       this.heapifyDown(0)
      return min
    }
    heapifyDown(index) {
      if(!this.isLeaf(index)){
        const leftChild = this.leftChild(index)
        const rightChild = this.rightChild(index)
        let smallIndex = index
        if(this.values[index] > this.values[leftChild]) {
          smallIndex = leftChild
        }
        if(this.values[smallIndex] > this.values[rightChild]) {
          smallIndex = rightChild
        }
        if(index!== smallIndex) {
          this.swap(index,smallIndex)
          this.heapifyDown(smallIndex)
        }
      }
    }
    buildHeap(array) {
      this.values = array
      for(let i = Math.floor(this.values.length/2);i >=0; i--) {
          this.heapifyDown(i)
      }
    }
  }
  
  const heap = new MinHeap()
  heap.add(10)
  heap.add(6)
  heap.add(11)
  heap.add(3)
  heap.add(1)
  heap.add(4)
  
  heap.buildHeap([20,15,25,14,5,1])
  console.log(heap.values)
  