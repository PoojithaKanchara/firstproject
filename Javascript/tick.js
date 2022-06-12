// setTimeout(()=>{
//     console.log('SetTimeout  called')
// }, 1000);


setImmediate(()=>{
    console.log('SetImmediate called')
})
setTimeout(()=>{
    console.log('SetTimeout with 0s')
},0)

process.nextTick(()=>console.log("Process next tick"));4

function fullNmame(args){

    console.log(this.name+args);
}

const obj={
    name:'Fuck 2'
}

fullNmame.call(obj, 'hello');
fullNmame.apply(obj, ['hello']);
const bindMethod = fullNmame.bind(obj, 'hello');

obj.name='fuck 3'

bindMethod();