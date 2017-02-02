var express = require('express')

var app = express(); //express.require returns an object which is a first-class function 

var port = process.env.PORT || 3000;
//accessing environment variable and default value is 3000 if null

app.get('/',function(req,res){ //routing
    res.send(
        '<html><head></head><body><h1>Hello Trippy!</h1></body></html>'
    ); //res is added to the prototype of the function returned by express.export,
    //and hence, available to app and app.get()
});


app.get('/api',function(req,res){
    res.json({firstname:'Nasa',lastname:'Trippy'});
    //res.json converts javascript object into json string
    
});
app.listen(port); //implements HttpCreateServer