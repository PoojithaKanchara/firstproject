// // how to pass an array as a function parameter

let arr =[4,5,6];

for (let i of arr){
    let x = i*i
    console.log(x)
}
//output 16
//       25
//       36


const arr = [4,5,6];

const map = arr.map( x => x*x);

console.log(map);

// output [16,25,36]


function func(array){
    let r = [];
    for (let i of array){
        r.push(i*i);
    }
    return r;
}
console.log(func([4,5,6]));

// output [16,25,36]