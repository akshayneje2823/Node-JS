const express = require('express');
const path = require('path')

const Path = path.join(__dirname,'')

const app = express();

app.get('',(req,resp)=>{
    resp.sendFile(`${Path}/index.html`)
});
app.get('/about',(req,resp)=>{
    resp.sendFile(`${Path}/about.html`)
});
app.get('',(req,resp)=>{
    resp.sendFile("404 Page not Found")
});

app.listen(5000)

// console.log(Path)