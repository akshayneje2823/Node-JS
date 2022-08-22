const express = require('express');
const path = require('path')

const Path = path.join(__dirname,'')

const app = express();

app.get('',(_,resp)=>{
    resp.sendFile(`${Path}/about.html`)
});
app.get('',(_,resp)=>{
    resp.sendFile(`${Path}/index.html`)
});

app.listen(5000)

// console.log(Path)