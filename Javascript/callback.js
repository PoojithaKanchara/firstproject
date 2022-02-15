// what is callback. I will call you back is called 'CALLBACK'

// callback , passing function as parameter to a function.


function print(){
    console.log('I am printing');
}

function mainFunction(callbackFn){
    // callback ..
    callbackFn()
}
mainFunction(print);


// what are the  timers in javascript?, 
// 1s = 1000ms
// 1mnt = 60 s
// 1hour = 60 mnts.
setTimeout(print, 10000);

// setInterval(print, 2000);

// what synchronous programming?

