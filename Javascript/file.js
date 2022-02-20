//What is require?

const fs = require('fs');

// let syncdata = fs.readFileSync('./Javascript/hello.txt')
// console.log('sync data: '+syncdata);

 function read(){
    return new Promise((resolve, reject)=>{
        fs.readFile('./Javascript/hello.txt',(err, data)=>{
            if(err){
                reject('File not found');
            }else{
                resolve(data.toString());
            }
        
        })
    })

}



async function func(){
    let x = await read();
    console.log(x)
    console.log("Reading file");
}

func();

//x.then((data)=> console.log(data)).catch(err=>console.log(err));






const fsp = require("fs/promises");

let p = fsp.readFile('./Javascript/hello.txt')
p.then(data=>console.log(data.toString()));