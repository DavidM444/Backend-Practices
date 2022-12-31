
let http = require('http');
const rd = require('./modules/retrieve')

http.createServer((req, res) =>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write("la fecha es: " + rd.retrieveDate());
    res.end("hiii")
}).listen(4800)

