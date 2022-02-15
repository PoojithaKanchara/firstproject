function actulaPrint(data){
    console.log(data)
}
function print(a, func){
   func(a);
}

function add(a,b, func){
    let r= a+b;
    func(r, actulaPrint); // its equalant to  print(r);
}

function mainFunc(){
    add(10,30, print) // callback, calling function parameter;
}
mainFunc();

let x = function(){
    console.log('variable function');
}

x();
// es6
let y = ()=>{
    console.log("Arrow function")
}
y();

//To Avoid calback hell, we use Promises;

