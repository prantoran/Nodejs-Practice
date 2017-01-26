var obj = {
    name:'John Doe',
    greet:function(){
        console.log(`Hello ${this.name}`); //string literals `${}`
    }
}

obj.greet();

obj.greet.call({name:'Jane Doe'});
//the argument given inside call makes this
//point to the argument, instead to the obj itself
obj.greet.apply({name:'Jane Doe'});