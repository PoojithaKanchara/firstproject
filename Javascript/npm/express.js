
const { json } = require('body-parser')
const express = require('express')
const app = express()

const fs = require('fs');

fs.writeFileSync('../hello.txt','Hello fuck you buddy');
const arry=[]
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/fuck', function (req, res) {
    res.send('Hello fuck')
  })

  
app.get('/fuck2', function (req, res) {
    console.log(req.query);
    let x = req.query.x;

    arry.push(x);
     
    let data = fs.readFileSync('../hello.txt');
    // DB store
    res.send('Hello fuck2 '+ data)
  })
app.listen(3000, ()=>console.log('listening @3000'))