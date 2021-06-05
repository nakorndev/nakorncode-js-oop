const math = {
    // expression
    // plus: function (a, b) {
    //     return a + b
    // },
    // minus: function (a, b) {
    //     return a - b
    // }

    // arrow
    // plus: (a, b) => {
    //     return a + b
    // },
    // minus: (a, b) => {
    //     return a - b
    // }

    // shorthand
    plus(a, b) {
        return a + b
    },
    minus(a, b) {
        return a - b
    }
}

console.log(math.plus(4, 3))
console.log(math.minus(4, 3))
