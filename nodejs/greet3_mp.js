function Greetr(){ //a regular function constructor
    this.greeting = 'Hello greet3_mp';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();