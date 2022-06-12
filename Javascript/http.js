let http = require('http');

http.createServer((req, res)=>{
res.end("Hello world")
}).listen(4000, ()=>{console.log('http server  listening on 4000')});