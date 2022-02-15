// Data types

//number, string, Boolean, Array, Object

//number : 10, 20, 42
console.log("NUMBER STARTEDD.............")
let x =10; // x is callled number variable
console.log(x);

console.log("STRING STARTEDD.............")
let str = "Name: Poojitha Reddy Kanchara,$%#$# age: 29, sex:M"; // str is called string variable
console.log(str);

let bool = true ; // false , bool is called boolean variable
// conditail staements; 
console.log("ARRAY STARTEDD.............")
let cars = [1, 2, 3, 4, 5, 10, 30, 40, 50]; // array of numbers; array is to store multiple values, values can be numbers/strings/boole/array/objec
console.log('accessing first index: '+cars[0]); // reading first index

let days=['monday', 'sunday'] // length is 2
days.push("tueseday"); // insering the values at end of the array
console.log(" array length: "+ days.length); // lenth of array

let person=['married', 'Poojita','kadapa', 'female','29'];
person[4]=30;

console.log(days[0]);

// person, name, age, sex, mStatus, add,
console.log("OBJECT STARTEDD.............")
let objPerson = {
   name : "poojitha",
   age : 28,
   sex : "female",
   mStatus: "married"
} // obj is called object variable.


let objCar = {
    brand: 'tata',
    variat: 'nexon xms',
    color: 'foiled green',
    engine: 'petrol',
    numberTyers: 4,
}

objPerson.age = 30; // accesing properties of objects
console.log(objPerson.age);
console.log(objPerson.name);