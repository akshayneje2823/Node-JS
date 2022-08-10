const http = require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hello Akshay</h1>")
}).listen(1000);
