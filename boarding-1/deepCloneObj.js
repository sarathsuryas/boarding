function deepClone(obj) {
    if(typeof obj!=='object' ||  obj === null || typeof obj === 'function') {
        return obj
    }
    
    const res ={}
    for (const key in obj) {
       if(Object.hasOwn(obj,key)) {
           if(typeof obj[key]==='object' ) {
               res[key] = deepClone(obj[key])
           } else {
               res[key] = obj[key]
           }
       }
    }
    return res
}