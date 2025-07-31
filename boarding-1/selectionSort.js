const array = [5,2,1,4,8,6,3]
for (let index = 0; index < array.length-1; index++) {
    let minIndex = index
  for(let j = i+1; j < array.length;j++) {
    if(array[j] < array[minIndex]) {
        minIndex = j
    }
  }
  let temp = array[index]
  array[index] = array[minIndex]
  array[minIndex] = temp
}

console.log(array)