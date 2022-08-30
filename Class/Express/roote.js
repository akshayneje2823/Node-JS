const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to homepage</h1>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>We are developers</h1>")
})
app.get('/user',(req,res)=>{
    res.send("<h1>Google</h1>")
})
app.get('/user/employee',(req,res)=>{
    res.send("<h1>Akshay Neje <br/><h3>Id : 101</h3></h1>")
});

app.listen(4000,err => console.log(err))