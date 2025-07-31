class HeapSorter {
    constructor(arr) {
        this.arr = arr;
    }

    // Function to heapify a subtree rooted with node i
    heapify(n,i) {
       let largest = i;
       const lc = 2 * i + 1;
       const rc = 2 * i + 2;
       if(lc < n && this.arr[lc] > arr[largest]) {
          largest = lc
       } 
       if(rc < n && this.arr[rc] > arr[largest]) {
        largest = rc
       }
       if(i!== largest) {
        const temp = arr[largest]; 
        arr[largest] = arr[i];
        arr[i] = temp; 
       }
    }

    // Function to perform heap sort
    heapSort() {
       const n = this.arr.length
       for (let i = Math.floor(n/2) - 1; i>=0 ; i--) {
       this.heapify(n,i)
       }
      for(let i = n-1; i>0; i--) {
        let temp = this.arr[0]
        this.arr[0] = this.arr[i]
        this.arr[i] = temp
        this.heapify(i,0)
      }
    }

    // Utility function to print the array
    printArray() {
        console.log(this.arr.join(" "));
    }
}

// Driver code
const arr = [10, 15, 5, 4, 7, 12]
const sorter = new HeapSorter(arr);
sorter.heapSort();
console.log("Sorted array is:");
sorter.printArray();
