const car = {
    color: 'red',   // property
    age: 0,         // property
    startEngine: function () {  // method
        console.log('Woooom!')
    }
}

let carColor = 'red'    // variable
let carAge = 0          // variable
let carStartEngine = function () { // function
    console.log('...')
}

console.log(carColor)
console.log(car.color)

carStartEngine()
car.startEngine()
