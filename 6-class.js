class UserObject {
    version = '1.0.0' // property

    constructor(name, age) { // construct
        this.name = name
        this.age = age
    }

    showInfo() { // method
        console.log(this.name, this.age)
    }
}

const user1 = new UserObject('John Doe', 18)
const user2 = new UserObject('Joe Dan', 21)

user1.showInfo()

user2.version = '1.2.0'
user2.showInfo()

console.log(user1.version)
console.log(user2.version)
