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



const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

const partition = (arr, left, right) => {
  const pivot = right--;
  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  swap(arr, left, pivot);
  return left;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}