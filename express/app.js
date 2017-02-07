var express = require('express')

var app = express(); //express.require returns an object which is a first-class function 

var port = process.env.PORT || 3000;
//accessing environment variable and default value is 3000 if null
app.use('/assets',express.static(__dirname+'/public')); //use middleware

app.use('/',function(req,res,next){ //can write our own middleware
    console.log("Request URL: "+req.url);
    next(); //must write next() for ending callback function of middleware
    //it means that run the next middleware 
});
//middleware exists between request and response layer


app.get('/',function(req,res){ //routing
    res.send(
        '<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello Trippy!</h1></body></html>'
    ); //res is added to the prototype of the function returned by express.export,
    //and hence, available to app and app.get()
});


app.get('/api',function(req,res){
    res.json({firstname:'Nasa',lastname:'Trippy'});
    //res.json converts javascript object into json string
    
});

app.get('/person/:id',function(req,res){ //taking input through variable id
    //the colong(:) tells javascript express that id could be anything
    res.send(
        '<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello Person: '+req.params.id+'</h1></body></html>'
    ); //res is added to the prototype of the function returned by express.export,
    //and hence, available to app and app.get()
    
});

app.listen(port); //implements HttpCreateServer