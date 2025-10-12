const array = [2, 3, 5, 7, 4, 9, 11, 2, 1, 6];

function removeContinuousOddNumbers(array) {
    const temp = []
    let i = 0
    while(i < array.length) {
        if(array[i] % 2 !== 0 && array[i+1] % 2 !== 0) {
            while (i < array.length && array[i] % 2 !== 0) i++
        } else {
            temp.push(array[i])
            i++
        }
    }
    console.log(temp)
   // Output: [2, 4, 2, 1, 6] → keeps the single 1

}

removeContinuousOddNumbers(array)