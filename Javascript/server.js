let http = require('http');

http.createServer((req, res)=>{

    res.end("hello world, this is my server");

}).listen(3000, ()=> console.log("listeing 3000"))