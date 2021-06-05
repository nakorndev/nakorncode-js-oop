class MyMath {
    plus(a, b) {
        return a + b
    }
    minus(a, b) {
        return a - b
    }
}

class StaticMath {
    static plus(a, b) {
        return a + b
    }
    static minus(a, b) {
        return a - b
    }
}

const math = new MyMath()
console.log(math.plus(4, 2))
console.log(math.minus(4, 2))

console.log(StaticMath.plus(4, 2))
console.log(StaticMath.minus(4, 2))
