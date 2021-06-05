const arr = ['a', 'b', 'c']
const obj = { a: 'apple', b: 'banana', c: 'cherry' }

// class Array {
//     toString() {}
// }

// class Object {
//     toString() {}
// }

Array.prototype.toString = function () {
    return this.join('/')
}

Object.prototype.toString = function () {
    let text = ''
    for (let key in this) {
        text += `${key}:${this[key]};`
    }
    return text
}

console.log(arr) // debug
console.log(obj)

// alert(arr) // string
alert(obj)

console.log(arr.toString())
console.log(obj.toString())
