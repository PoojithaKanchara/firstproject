function add(){
    console.log("add")
}

add();

// self inovocation function
(function(a,b){

    let z = a+b;
    console.log('selfInfocation '+z );
})(10, 20)

// closur are function inside function: to create a private variable
// function outer(){
// console.log("Outer function ");
//     return (function inner(){
//         console.log('Inner function');
//     })()
// }

// outer();

function outer(){

    console.log("Outer function ");
        return function inner(){
            console.log('Inner function x: ');
            return 1;
        }
}
    
//outer();

let x = outer();
x();  //outer()()



//call, apply, bind


let obj={
    fname:'fukck',
    lname:'you',
    fulname:function(city, coutnr){
        return this.fname+ this.lname+" "+city+' '+coutnr;
    }
}


let obj1={
    fname:'you fuck ',
    lname:'me',

}


console.log(obj.fulname.call(obj1, 'kadap'));
console.log(obj.fulname.apply(obj1,['kadapa', 'india']));


let bindMethod = obj.fulname.bind(obj1);
obj1.fname = 'love you'
console.log(bindMethod());




function subsctract(){
    console.log("subsctract fucntion")
}


module.exports ={
    subsctract
}
