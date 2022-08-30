const fieSync = require('fs') ;

const data = fieSync.readFileSync("fs.txt",'utf-8')
console.log(data)