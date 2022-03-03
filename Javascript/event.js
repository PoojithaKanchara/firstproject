// event emitter in node js..

const { EventEmitter } = require("stream");

let x = new EventEmitter();

x.addListener("fuck", ()=>console.log('fuckinng firstr'))

x.on('fuck', ()=>console.log('fucking'));

x.emit('fuck1')