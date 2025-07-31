// const express = require('express')

// const app = express()

// app.use((err,req,res,next)=>{
//     console.error(err.stack)
//     res.status(500).json(err)
// })

// app.get('/',(req,res,next)=>{
//    throw new Error("yes it is ")
// })

// process.on('uncaughtException',(err)=>{
//     console.error(err)
//     process.exit(1)
// })

// app.listen(3000)


class HeapSorter {
    constructor(arr) {
     this.arr = arr
    }
   heapify(n,i) {
     let largest = i
     const lc = 2 * i + 1
     const rc = 2 * i + 2

     if(n > lc && this.arr[lc] > this.arr[i]) {
        largest = lc
     }
     if(n > rc && this.arr[rc] > this.arr[largest]) {
        largest = rc
     }
     if(i!== largest) {
         let temp = this.arr[largest]
         this.arr[largest] = this.arr[i]
         this.arr[i] = temp
     }
   } 
   sort() {
    const n = this.arr.length
    for (let i= Math.floor(n/2)-1;  i >= 0; i--) {
        this.heapify(n,i)
    }
    for (let j = n -1; j > 0; j--) {
        let temp = this.arr[0]
        this.arr[0] = this.arr[j]
        this.arr[j] = temp
        this.heapify(j,0)
    }
   }
  
}

const arr = [10, 15, 5, 4, 7, 12]
const str = "sarath"
const sorter = new HeapSorter(str.split(''));
sorter.sort();
console.log(sorter.arr)
