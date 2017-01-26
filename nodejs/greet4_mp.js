function Greetr(){ //a regular function constructor
    this.greeting = 'Hello greet3_mp';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr; 
//instead of returning a newly created object,
//we are returning the ability to create a 
//new object