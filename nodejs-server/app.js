var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){ //an event-listener
    
    //req=request, res=response,stream
    res.writeHead(200,{'Content-Type':'text/html'});//(statuscode,) 
    
    //This is inefficient since the whole file is first loaded in buffer and then passed
    //which takse up a lot of memory
    //var html = fs.readFileSync(__dirname+'/index.htm','utf-8');
    //encoding: utf8

    //var message = 'Hello World ... using templates';
    //html = html.replace('{Message}',message);

    //res = response, it is a writable stream
    //res = HTTP response
    //res.end('Hello world\n');//actual stream to send
    //res.end(html);

    //Using streams to improve performance:
    fs.createReadStream(__dirname+'/index.htm').pipe(res);
    //once a chunk is received, it is piped to res,
    //hence, it is not waiting for the whole file to be loaded
    
    

    
}).listen(1337,'127.0.0.1');