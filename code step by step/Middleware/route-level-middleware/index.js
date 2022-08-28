const express = require('express');
const reqFilter = require('./middle');
const app = express();
const router = express.Router()


app.get('/',(req,resp)=>{
    resp.send('<h1>This is Homepage</h1>')
})


app.get('/contact',(req,resp)=>{
    resp.send("This is Contact Page")
})


app.get('/login',(req,resp)=>{
    resp.send("This is Login page")
})


router.get('/user',(req,resp)=>{
    resp.send("<h1>kamach Bgha re sudhara re jara</h1>")
})
app.use(reqFilter)
app.use(router)

// app.get('/Setting',reqFilter,(req,resp)=>{
//     resp.send("<h2>This is Seting Page</h2>")
// })
app.listen(5000)