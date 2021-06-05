class MainRobot {
    constructor() {
        console.log('MainRobot is booting...')
    }
}

class MyCustomRobot extends MainRobot {
    constructor() {
        super() // data from extends (inherit)
        console.log('Edited by MyRobotEdition')
    }
}

const myRobot = new MyCustomRobot()
