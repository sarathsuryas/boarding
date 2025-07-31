Array.prototype.myMap = function(callback) {
    const result = []
    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index],index,this))
    }
    return result
}

const arr = [10,20,30]

const data = arr.myMap((a)=>a === 10)

console.log(data)