const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(4000,(err)=>{
    if(err) throw err;
    console.log("Server is running port on 40000")
})