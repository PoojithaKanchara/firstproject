//  var,let, const

// javscript versions.

// ecma script versions
// Es5: var 
// es6: let , const introduced,


// var x=0;
// var y =x;
// var z=x +y;

// let a =0;
// let b=a;
// let c = a+b;
// what is difference b.w let and var and const
// var is funtional scoping variable
// let is block scoping 

// console.log(i);
// var i =0;


let x = 0

function add(){
    let y=0;
    if( x==y){
        var z=0;
    }

    console.log(z);
}

add()


// const varialbe is one time assignment, we can't reassign it.
const a = "const varaible";
console.log(a);

const arr = [40, 50,60];
console.log(arr)
arr.push(89)
console.log(arr)


