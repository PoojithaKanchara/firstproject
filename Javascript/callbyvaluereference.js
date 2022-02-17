// call by value  && Call by Reference> address

//let x= poojitha
// Numbers, strings, bool. = premitive datatyps ,  object, array => Non-premitimve

function print(x){
    console.log(x);
    x = 40;
    console.log(x);
}
var x = 30 , y=40;
print(x);
console.log(x); // 30

function swap(a, b){
    console.log("Before swap "+a +" "+b)
    let t =a;
    a =b;
    b= t;
  console.log("After swap "+a + " "+b);
}

swap(10, 15)

function modify(emp1){

    emp1.name='Poooooooooooo reddy'
}
let emp={
    name:"poojitha",
    age: "29"
}

modify(emp)

console.log(emp) // name change

