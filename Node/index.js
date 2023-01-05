const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
    fs.readFile('./demo.html', function(err, data) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3200)

http.createServer((req, res) =>{
    res.write(200,{'Content-Type': 'text/html'})
} )