//fs: file system module 

let fs = require('fs');
let syncdata = fs.readFileSync('./Javascript/hello.txt');
console.log(data.tostring());

function read() {
       return new promise((resolve,reject)=> {
        fs.readFile('./Javascript/hello.txt',(err,data)=>{
            if(err){
                reject("file not found");
            }else{
                resolve(data.toString());
            }
        })

       })
}
let x = read();
x.then((data)=> console.log(data)).catch((err)=> console.log(err));


async function func2(){
    let p = await read();
    console.log(p);
}
func2();
console.log("Reading file")