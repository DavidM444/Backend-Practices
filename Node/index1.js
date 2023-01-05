
const http = require('http');
const url  = require('url')
const rd = require('./modules/retrieve')

http.createServer((req, res) =>{
    res.writeHead(200,{
        'Content-Type':'text/html'});
   // res.write("la fecha es: " + rd.retrieveDate());
   const query = url.parse(req.url, true).query
   const text = query.year + "  "+ query.month
   //res.end("hiii")
   
   res.end(text);
}).listen(4800)

