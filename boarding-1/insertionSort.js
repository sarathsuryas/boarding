const array = [5,2,1,4,8,6,3]
for(let i = 1; i < array.length; i++) {
    let key = array[i]
    for (let j = i-1; j >=0 && array[j] > key ; j--) {
        array[j+1] = array[j]
    }
    array[j+1] = key
}

console.log(array)