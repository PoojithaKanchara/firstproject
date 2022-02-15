
function add(a, b){
    return a+b;
}

let arrNumbers=[10, 5, 20, 30, 50, 60,70];

for(let x of arrNumbers){
    let r = add(x, x);
    console.log(r);
}

// printing/ clling function 15 times..
function print(){
    console.log('Hellow world')
}

let i=0;
while(i < 15){
    print();
    i++;
}