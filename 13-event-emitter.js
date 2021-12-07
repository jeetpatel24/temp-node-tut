const EventEmitter = require('events')

//lets create the object of 'EventEmitter' class
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data received user ${name} ${age}`);
})
customEmitter.on('response', () => {
    console.log('data received twice');
})

customEmitter.emit('response', 'Jeet', 23);