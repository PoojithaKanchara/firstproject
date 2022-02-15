

function func(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('from setTimeout')
        }, 10000);
    });

}
//let p = func();
//p.then((data)=>console.log(data))
async function func2(){
    let p = await func();
    console.log(p);
    console.log('Inside a function')
   
}
func2();


function readFile(calbackFun){

    //reading asynchonoush

    calbackFun();
}


console.log('Chandra...')








