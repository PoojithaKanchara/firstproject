// functins
// datatypes: number, string, boolean, array,object

// conditional Statements,

// if condi

// if else, 

// if  else if, else

// switch()

let x = 7;

if(x>6){ // ==, >,<,>=,<=, 
    console.log('INSIDE IF CONDITION')
}else if(x==1){
    console.log('else if executted')
}else if(x==6){
 console.log('inside else if 2 condion')
}else{
    console.log('inside else condion')
}


console.log('MAIN WORKSPACE ')


function larget(a, b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
let y = larget(4,5);
console.log("result " +y);

// exercise: largest of 3 numbers. smallest of 3 numbers


// input: 1
//output : ONE
// INPUT : 2
// OUTPUT: TWO
function printNumbersInEnglish(a){

    switch(a){ // a =4
        case 1:console.log("ONE");
        break;

        case 2: console.log("TOW");
        break;

        case 3: console.log("THREEE");
        break;

        case 4: console.log("FOUR");
        break;

        case 5: console.log("FIVE");
        break;

        case 6: console.log("SiX");
        break;
        default: console.log('NOT FOUND')
    }
}

printNumbersInEnglish(7);
printNumbersInEnglish(1);


function add(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

function arthimetionOperation(operation){

    switch(operation){

        case "ADD": let r = add(1,2)
                    console.log(r)
                    break;
        case "SUB": let p = Sub(3,2)
                    console.log(p);
                    break;
        default: console.log('method not implementd')
        
    }
}

arthimetionOperation('ADD');
arthimetionOperation('SUB');