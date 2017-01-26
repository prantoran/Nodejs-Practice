
function Person(firstname,lastname){ //Capital letter for function constructor
    this.lastname = lastname;
    this.firstname = firstname;
}

Person.prototype.greet = function(){
    console.log('Hello '+this.firstname+' '+this.lastname);
};


//var pinku = new Person('Pinku','Nath');

//console.log(pinku.lastname);

module.exports = Person;