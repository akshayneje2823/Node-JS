var fs = require('fs');

fs.appendFile('newFile.txt',"Hello Bro",function(err){
    if(err) throw err
    console.log("Successfuly created")
})