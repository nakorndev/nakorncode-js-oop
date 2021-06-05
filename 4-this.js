// arrow จะไม่ reference (this = undefined)
// function express จะ reference (this = {})

function showInfoFn() {
    console.log(this.name, this.age)
}

// showInfoFn      // read function
// showInfoFn()    // call function

const user1 = {
    name: 'John Doe',
    age: 18,
    showInfo: showInfoFn
}

const user2 = {
    name: 'Joe Dan',
    age: 21,
    showInfo: showInfoFn
}

user1.showInfo()

user2.age = 30
user2.showInfo()
