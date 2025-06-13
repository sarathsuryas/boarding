const array = [[7,3], [7,3], [3,8], [7,3], [7,3], [1,2]];

function removeDuplicates(array) {
  const uniques = []
  const map = {}
  for(let i = 0; i < array.length;i++) {
    const key = JSON.stringify(array[i])
    if(map[key]) {continue}
    uniques.push(array[i])
    map[key] = true
  } 
  console.log(uniques)
}

removeDuplicates(array)