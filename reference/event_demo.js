const EventEmitter = require('events')

//create Class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter()

//Event Listener
myEmitter.on('event', () => console.log("Event Fired"))

//init Event
myEmitter.emit('event')