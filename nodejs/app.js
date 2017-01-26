

require('./greet.js'); //for importing modules
//the position of the require() matters 
//the position defines the point from which the execution of the module will start
//we cannot call here the stuff defined in greet.js module to ensure 
//code inside module is protected
//we have to explicit make stuff of module available
//adv: same variable name in different included modules will not collide

var moduleGreet = require('./greet.js'); //multiple import/require of same module allowed
//.js can be ommitted if there is only 1 file with name 'greet'
moduleGreet(); //runs the function returned by module greet.js

var a = 1;
var b = 2;
var c = a+b;
console.log(c);
//fucntion statement
function greet(){
    console.log('HI');
}
greet();

//functions are first-class

function logGreeting(fn){ //giving function another function
    fn();
}

logGreeting(greet);//if we use () after greet, we will be passing output of function greet()


//function-expression

var greetMe = function(){
    console.log('Hi Pinku');
}

greetMe() //invoking/calling the function expression
//it is still first-clarr
logGreeting(greetMe);

//use a function expression on the fly

logGreeting(function(){
    console.log('Hello pranoran');
});

var modulePerson = require('./functionConstructor');

var John = new modulePerson('John','Doe');

console.log(John.lastname);
John.greet();
console.log(John.__proto__);