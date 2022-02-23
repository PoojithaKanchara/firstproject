function fact(n){
    if(n==1){
        return 1;
    }
    
    return n*fact(n-1)
}

console.log(fact(5))

function factLoop(n){
    let r=1;
    for(let i=n;i>=1;i--){
        r= r*i; // r= 1*5,  r = 5*4, r = 20*3
    }

    return r;
}
console.log(factLoop(5))
