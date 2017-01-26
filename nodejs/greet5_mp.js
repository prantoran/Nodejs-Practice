//extremely popular modular pattern
//the revealing module pattern
var greeting = 'Hello greet5_mp';

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet //I am only exposing the function
    //not the variable greeting
}