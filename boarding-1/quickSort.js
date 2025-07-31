const array = [64, 34, 25, 12, 22, 11]
function quckSort(arr) {
    if(arr.length <= 1) {
        return arr
    }
    const leftArr = []
    const rightArr = []
    const pivot = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < pivot) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }      
    }
    return [...quckSort(leftArr),pivot,...quckSort(rightArr)]
}
console.log(quckSort(array))