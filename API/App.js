const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello Anna</h1>")
})

// getting Roues 

app.use('/user',require('./router/userRouter'))
app.use('/product',require('./router/productsRoot'))




// app.get('/user/login',(req,res)=>{
//     res.send("<h1>User Login</h1>")
// })
// app.get('/user/registraion',(req,res)=>{
//     res.send("<h1>User Registration</h1>")
// })

app.listen(5000,(err)=>{
    if(err) throw err;
    console.log(`Running On Port Number ${5000}`)
});
