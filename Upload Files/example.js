var http = require('http');
http.createServer(function(rwq,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<form action="fileupload" method="post" enctype="mulripart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end()
}).listen(8080);

// Step 2

