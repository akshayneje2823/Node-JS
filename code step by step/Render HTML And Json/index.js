const express = require('express');

const app = express();

app.get("",(req,res)=>{
    res.send("<h1>Welcome To Home Page</h1> <br> <a href='/about'>Go To about page</a>")
});
app.get("/about",(req,res)=>{
    res.send([
        {
            name:"akshay",
            lastName:"neje"
        }
    ])
});

app.listen(5000)