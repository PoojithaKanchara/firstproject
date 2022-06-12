const event = require('events')

const event1 = new event.EventEmitter();

event1.on('fuck', ()=>{
    console.log('fuckkedd')
})

event1.emit('fuck')