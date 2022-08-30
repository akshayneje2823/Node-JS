const express = require('express');
const router = express.Router();

router.get('/user',(req,res)=>{
    res.send("<h1>Root User - Request</h1>")
})
router.get('/user/login',(req,res)=>{
    res.send("<h1>Root Login - Request</h1>")
})
router.get('/user/registraion',(req,res)=>{
    res.send("<h1>Root All Users - Request</h1>")
})