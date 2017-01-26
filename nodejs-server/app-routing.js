var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){ //an event-listener
    //here, we are looking at the url in the request, hence tailored response
    
    if(req.url === '/' ){
        fs.createReadStream(__dirname+'/index.htm').pipe(res);
    }
    else if(req.url === '/api'){

     
        res.writeHead(200,{'Content-Type':'application/json'});//(statuscode,) 
        
        var obj = {
            firstname:'John',
            lastname:'Doe'
        };

        res.end(JSON.stringify(obj)); 
    }else{
        res.writeHead(404);
        //for the case when the URL is unknown
        res.end('asdfasdf');

    }

    
    //JSON.strinigy(obj) is serializing the object obj
    //The Javascript engine in the browser deserializes the output of res
    //getting data from the API endpoint(an URL) and
    //displaying the data
    //the code doing the deserializing can be JS, PHP etc

    
    //Using streams to improve performance:
    //fs.createReadStream(__dirname+'/index.htm').pipe(res);
    //once a chunk is received, it is piped to res,
    //hence, it is not waiting for the whole file to be loaded
    
    
    
}).listen(1337,'127.0.0.1');

//We have built a simple API endpoint that does only one thing




