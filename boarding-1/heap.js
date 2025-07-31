class Heap {
    constructor() {
      this.data = []
      this.size = - 1
    }
    insert(value) {
      this.data.push(value);
      this.size++;
      this.heapifyUP()
  
    } 
    heapifyUP() {
        let i = this.size
      while (true) {
        let parent = Math.floor((i-1)/2)
        if (this.data[parent] < this.data[i]) {
          let temp = this.data[parent]
          this.data[parent] = this.data[i]
          this.data[i] = temp
          i = parent
        } else {
          break;
        }
      }
    }
    delete() {
      let element = this.data[this.size]
      this.data[0] = element
      this.size--
      this.heapifyDown()   
    }
    heapifyDown(arr = this.data,size = this.size,i=0) {
       let left = 2 * i + 1
       let right = 2 * i + 2
       let largest = i
       if(largest < size && arr[left] > arr[largest]) {
        largest = left
       }
       if(largest < size && arr[right] > arr[largest]) {
        largest = right
       }
       if(i!== largest) {
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
        this.heapifyDown(arr,size,largest)
       }
    }
  }
  
  let heap = new Heap()
  heap.insert(10)
  heap.insert(20)
  heap.insert(15)
  heap.insert(12)
  heap.insert(6)
  heap.insert(45)
  heap.insert(39)
  heap.insert(60)
  heap.delete()
  heap.delete()
  for (let i = 0; i <= heap.size; i++) {
    console.log(heap.data[i])
  }
  
  console.log(heap.data)