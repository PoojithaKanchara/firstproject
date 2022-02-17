// Loops are used to execute repetitive code/ multiple times/ parsing array



let str ="poojitha" // string variable

//-for, for in, for of, while, dowhille
let x=0;
x++;// x= x+1;
x++ ;// 2, x= x+1
x

let arrNumbers=[10, 5, 20, 30, 50, 60,70]; //array of numbers length:7

console.log('Loop starteddd.....');
for(let i = 0; i<arrNumbers.length; i++){ // i=0; 0<7 ; i=1

    // add funciton
    //     add(10, i)
    console.log(arrNumbers[i]);

    if(i ==2){
        break;
    }

}
console.log('Loop Ended');

// ---------------
// i =0
// 0<7 : 10
// ----------------
// i=1; 1<7:5

// i=6: 6<7: 70
// -----------
// i=7; 7<7

let days=['monday', 'sunday', 'tuseday']; // array of strings

console.log('array string Loop starteddd.....');
for(let i = 0; i<days.length; i++){ // i=0; 0<3 ; i=1
    console.log(days[i]);
}
console.log('Loop Ended');

console.log('array string using for in Loop starteddd.....');
for(let i in days){ // i=0; 0<3 ; i=1
    console.log(days[i]);
}
console.log('Loop Ended');


console.log('array string using for of Loop starteddd.....');
for(let p of days){ // i=0; 0<3 ; i=1  very very impartant
    console.log(p);
}
console.log('Loop Ended');


console.log('While loop started')
let k=0;
while(k< days.length){
    console.log(days[k]);
    k++;
}
console.log('While loop ended..')


let objCar = {
    brand: 'tata',
    variat: 'nexon xms',
    color: 'foiled green',
    engine: 'petrol',
    numberTyers: 4,
}

console.log(" object loop  for in only works ..startedd...")
for(let prop in objCar){ // i=0; 0<3 ; i=1  very very impartant
    console.log(prop + " : "+ objCar[prop]);
}
console.log(" object loop ended.....")














    

