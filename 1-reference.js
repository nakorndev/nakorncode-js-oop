function compareArray (arr1, arr2) {
    let allEqual = true
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            allEqual = false
        }
    }
    return allEqual
}

// typeof "object"

const fruits1 = ['apple', 'banana', 'cherry'] // address 1
const fruits2 = ['apple', 'banana', 'cherry'] // address 2

console.log(compareArray(fruits1, fruits2))
// address 1 == address 2

// reference (pointer c)

function copyArray (arr) {
    let output = [] // address ?
    for (const item of arr) {
        output.push(item)
    }
    return output
}

const copyFruits = copyArray(fruits1) // copy address 1
copyFruits[2] = 'melon' // edit address 1 [2] = 'melon'

console.log(fruits1)
console.log(copyFruits)

// const number = 123
// let copyNumber = number // copy value
// copyNumber = 321

// console.log(number)
// console.log(copyNumber)
