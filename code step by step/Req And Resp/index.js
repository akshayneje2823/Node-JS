const express = require("express");

const app = express();

app.get('',(req,res)=>{
    console.log("Data send by" + req.query.name)
    res.send("This is Home Page")
})
app.get('/about',(req,res)=>{
    res.send("You are Welcome")
})
app.listen(5000)