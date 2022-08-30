var fs = require('fs');

fs.open('newFile.html','w',function(err){
    if(err) throw err;
    console.log('Saved!')
})