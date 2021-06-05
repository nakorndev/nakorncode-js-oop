class Employee { // parent
    constructor(fullName, salary) {
        this.fullName = fullName
        this.salary = salary
    }
    getInfo() {
        console.log(`${this.fullName} (${this.salary})`)
    }
}

class AdminBranch extends Employee { // child
    getInfo() {
        console.log(`[Admin] ${this.fullName} (${this.salary})`)
    }
    getEmployees() {
        console.log('Employees...')
    }
}

class EngineerBranch extends Employee { // child
    getInfo() {
        console.log(`[Engineer] ${this.fullName} (${this.salary})`)
    }
    getRepositories() {
        console.log('Repositories...')
    }
}

const john = new AdminBranch('John Doe', 18000)
john.getInfo()
john.getEmployees()
// john.getRepositories()

const joe = new EngineerBranch('Joe Dan', 21000)
joe.getInfo()
// joe.getEmployees()
joe.getRepositories()
