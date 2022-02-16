//Nan is not  a Number


let x = 'aklsdjfsdl';

console.log(typeof x);

function isNumber(x){

    return isNaN(x)
}

console.log(isNumber(10));
console.log(isNumber('Hello'));
let res = parseInt(x, 10)
console.log(res);

if(isNaN(res)){
    console.log('its fuckin nan')
}

console.log(res==NaN);