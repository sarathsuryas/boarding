const obj = {
    name:"sarath",
    address:{
        city:'pala',
        place:'vallichira',
        numbers:{
          no:10,  
        }
    }
}

function flatObject(obj) {
   const result = {}
   for (const key in obj) {
    if(typeof obj[key] === 'object') {
       const temp = flatObject(obj[key])
       for (const subkey in temp) {
          result[key+'.'+subkey] = temp[subkey]
       }
    } else {
        result[key] = obj[key]
    }
   }
   return result 
}

console.log(flatObject(obj))