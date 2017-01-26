

var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){ //an event-listener
    
    
    res.writeHead(200,{'Content-Type':'application/json'});//(statuscode,) 
    
    var obj = {
        firstname:'John',
        lastname:'Doe'
    };



    res.end(JSON.stringify(obj)); 
    //JSON.strinigy(obj) is serializing the object obj
    //The Javascript engine in the browser deserializes the output of res
    //getting data from the API endpoint(an URL) and
    //displaying the data
    //the code doing the deserializing can be JS, PHP etc

    
    //Using streams to improve performance:
    //fs.createReadStream(__dirname+'/index.htm').pipe(res);
    //once a chunk is received, it is piped to res,
    //hence, it is not waiting for the whole file to be loaded
    
    
    //here the server is giving the output for any request
    //it is not even looking at the URL in the request
    
}).listen(1337,'127.0.0.1');

//We have built a simple API endpoint that does only one thing