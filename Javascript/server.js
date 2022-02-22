let http = require('http');

http.createServer((req, res)=>{

    res.end("<html><h1>hello</h1><button>fuck</button></html>");

}).listen(3000, ()=> console.log("listeing 3000"))