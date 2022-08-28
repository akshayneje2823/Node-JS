const express  = require('express');

const app = express();


// Middleware

const reqFilter = (req,resp,next)=>{
    if (!req.query.age) {
        resp.send("Please Provide age")
    }else if (req.query.age < 18) {
        resp.send("You are not Eligible")
    } else {
        next();
    }
    
}

app.use(reqFilter)

//Middleware






app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome To home page</h1>")
})
app.get("/user",(req,resp)=>{
    resp.send("<h1>Welcome To Users page</h1>")
})
app.listen(5000)
