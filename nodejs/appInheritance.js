'use strict'; //makes JS pickier
//makes ES6 classes available
//nodejs core modules
var EventEmitter = require('events'); //function constructor
var util = require('util');



function Greetr(){
    EventEmitter.call(this); //calling the function constructor
    this.greeting = 'Hello world!';

 
}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting+': '+data);
    this.emit('greet',data); //events function
}

var greetr1 = new Greetr();

greetr1.on('greet',function(data){   //events function
    console.log('someone greeted!'+data);
});

greetr1.greet('Tony');


class Greetr2 extends EventEmitter {
    constructor(){
        super();
        this.greeting = 'Hello World';
    }

    greet(data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet',data);
    }
}

var G2 = new Greetr2();
G2.on('greet',function(data){   //events function
    console.log('someone greeted!'+data);
});
G2.greet('Mark');

class Person{ //ES6 classes, syntactice sugar
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //any other methods u put inside the class are automatically put on the
    //prototype
    greet(){
        console.log('Hello '+this.firstname+' '+this.lastname);
        
    }
}

var john = new Person('Joahn','doe');
john.greet();