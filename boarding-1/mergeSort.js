function mergeSort(array) {
    if(array.length === 1) {
        return array
    }
    let mid = Math.floor(array.length/2)
    let leftArr = array.slice(0,mid)
    let rightArr = array.slice(mid,array.length)
   const leftSortArray = mergeSort(leftArr)
   const righSortArray =  mergeSort(rightArr)
 return merge(leftSortArray,righSortArray)
}
function merge(leftArr,rightArray) {
    const result = []
    while (leftArr.length && rightArray.length) {
        if(leftArr[0] < rightArray[0]) {
            result.push(leftArr.shift())
        } else {
            result.push(rightArray.shift())
        }
    }
    return [...result,...leftArr,...rightArray]
}

console.log(mergeSort([64, 34, 25, 12, 22, 11]))
