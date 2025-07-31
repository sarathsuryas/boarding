const input = {
    name: 'Mansi',
    age: 25,
    department: {
      name: 'Customer Experience',
      section: 'Technical',
      branch: {
         name: 'Bangalore',
         timezone: 'IST'
      }
    },
    company: {
     name: 'SAP',
     customers: ['Ford', 'Nestle']
    },
    skills: ['javascript', 'node.js', 'html']
  }
function flatObject(object) {
    const result = {}
    for (const mainKey in object) {
       if(typeof object[mainKey] === "object" && !Array.isArray(object[mainKey])) {
           const temp = flatObject(object[mainKey])
        //    console.log(temp)
          for (const key in temp) {
            result[mainKey + "." + key] = temp[key]
          }
       } else {
         result[mainKey] = object[mainKey]
       }
    }
    return result
}

 console.log(flatObject(input))

