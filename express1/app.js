const express= require('express');
const ap = express();

ap.get('/', function(req, res)  {
    res.send("hello world");
}).listen(3000, ()=>console.log('server listening on 3000'));

