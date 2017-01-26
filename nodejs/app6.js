var p = {
    fn:'',
    ln:'',
    greet:function(){
        return this.fn + '' + this.ln;
    }
}


var john = Object.create(p);
//Object.create() creates an empty object whose 
//prototype is p
john.fn = 'John'; //overwriting fn of prototype
john.ln = 'Does';

//if I call greet, it will crawl down to prototype 
//and not find 'JOhn'

var jane = Object.create(p);
//Object.create() creates an empty object whose 
//prototype is p
jane.fn = 'jane'; //overwriting fn of prototype
jane.ln = 'Does';


console.log(john.greet());
console.log(jane.greet());