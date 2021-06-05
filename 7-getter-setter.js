class UserObject {
    protect = false
    get name() {
        if (this.protect) {
            return 'Cannot access'
        }
        return `${this.firstName} ${this.lastName}`
    }
    set name(fullName) {
        if (fullName.length != 2) {
            console.log('Data is not array')
            return
        }
        this.firstName = fullName[0]
        this.lastName = fullName[1]
    }
}

const user = new UserObject()

user.protect = true
user.name = ['John', 'Doe'] // set
console.log(user.name)      // get
