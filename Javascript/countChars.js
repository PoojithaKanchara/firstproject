

function countChars(y){

    let x =y.split('');

    let countObj={}

    console.log(x);

    for(let ch of x){

        if(countObj[ch]!=null){
            countObj[ch] = ++countObj[ch]
        }else{
            countObj[ch]=1;
        }
    }

    return countObj;
    
}

console.log(countChars('hello'))