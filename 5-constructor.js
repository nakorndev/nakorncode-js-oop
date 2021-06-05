function UserObject(name, age) {
    // implicity
    // this = {}
    this.name = name
    this.age = age
    this.showInfo = function () {
        console.log(this.name, this.age)
    }
    // return this
}

// UserObject = constructor
// user1, user2 = instance

const user1 = new UserObject('John Doe', 18)
const user2 = new UserObject('Joe Dan', 21)

user1.showInfo()
user2.showInfo()
