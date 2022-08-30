 const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.send("<h1>We are requesting something<h3>")
})

// Post method
// we cant test in the browser level 
app.post('/signup',(req,res)=>{
    res.send("<h2>User Register Successfully<h2>")
})

app.listen(4000,(err)=>{
    if(err) throw err;
    console.log("server is running port 4000")
})