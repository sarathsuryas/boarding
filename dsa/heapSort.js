function swap(index1,index2,array) {
    [array[index1],array[index2]] = [array[index2],array[index1]]
 }
 
 function heapify(index,array,length=array.length) {
   const leftChild = 2 * index + 1
   const rightChild = 2 * index + 2
   let largeIndex = index
   if(length > leftChild && array[leftChild] > array[index]) {
     largeIndex = leftChild
   }
   if(length > rightChild && array[rightChild] >  array[largeIndex]) {
     largeIndex = rightChild
   }
   if(index!==largeIndex) {
     swap(index,largeIndex,array)
     heapify(largeIndex,array,length)
   }
 }
 
 
 function heapSort(array) {
    for(let i = Math.floor(array.length / 2); i >= 0; i--) {
     heapify(i,array)
    }
    for (let i = array.length-1; i > 0; i--) {
         swap(0,i,array)
         heapify(0,array,i)  
    }
    return array
 }
 
 console.log(heapSort([4, 2, 5, 1, 3, 6]));
 