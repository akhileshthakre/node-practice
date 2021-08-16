// const Person = require("./person")
const Logger = require('./logger')

// const person1 = new Person('Akhilesh',25)
// person1.greeting()

const logger = new Logger()

logger.on('message', data => console.log('Called Listner',data))

logger.log('Hello World')
logger.log('Hi World')