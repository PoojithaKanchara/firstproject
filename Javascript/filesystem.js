//What is require?
//fs : file system module

const fs = require('fs');

// let syncdata = fs.readFileSync('./Javascript/hello.txt')
// console.log('sync data: '+syncdata);

 function read(){
    return new Promise((resolve, reject)=>{
        fs.readFile('./hello1.txt',(err, data)=>{
            if(err){
                reject('File not found');
            }else{
                resolve(data.toString());
            }
        
        })
    })

}



async function func(){
    try{
        let x = await read();
        console.log("Reading file");
    }catch(err){
        console.log(err);
    }

}

try{
    func();
}catch(err){
    console.log("main ccatchh..")
}


//x.then((data)=> console.log(data)).catch(err=>console.log(err));






const fsp = require("fs/promises");

let p = fsp.readFile('./Javascript/hello.txt')
p.then(data=>console.log(data.toString()));