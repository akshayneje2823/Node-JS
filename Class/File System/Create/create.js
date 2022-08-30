// create new file using append function

var fs = require('fs');

fs.appendFile('newFile.html','Hello Content',function(err){
    if(err) throw err;
    console.log('Saved!')
})