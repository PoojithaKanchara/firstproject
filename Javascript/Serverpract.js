let http = require('http')

http.createServer((request,resolve)=>{

    resolve.end("This is Poojitha")
    
}).listen(2000, ()=> console.log("listening 2000"));