var fs = require('fs')
fs.unlink('newFile.txt',function(err){
    if(err)throw error;
    console.log('Deleted')
})