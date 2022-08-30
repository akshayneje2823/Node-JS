const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("<h1>Root User - Request</h1>")
})
router.get('/login',(req,res)=>{
    res.send("<h1>Login Login - Request</h1>")
})
router.get('/registraion',(req,res)=>{
    res.send("<h1>Registraion  - Request</h1>")
});
router.get('/alluser',(req,res)=>{
    res.send("<h1>Root All Users - Request</h1>")
});

module.exports = router