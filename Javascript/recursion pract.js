//recusrion : repeatively calling a function inside a same function

function fact(n){
    if(n == 1){
        return 1;
    }
    return n*fact(n-1); // return 7*6!  42*5!  210*4!
}
console.log(fact(7))


