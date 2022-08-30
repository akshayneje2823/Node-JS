const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})

app.get('/',(req,res)=>{
    res.send("<h1>Root File</h1>");
});

app.listen(process.env.PORT,(err)=>{
    console.log(process.env.PORT)
    console.log(`server is running on port ${process.env.PORT}`);
    if (err) throw err
})

// app.listen(4000,(err)=>{
//     console.log(err);
//     console.log('server is running on port 4000')  
// })