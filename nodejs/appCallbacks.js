function greet(callback){
    console.log('Hello');
    var data = {
        name: 'John Doe'
    }
    //we expect that the callback will be a function
    callback(data); //callback is processed once everything above is processed
}

greet(function(data){
    console.log('The callback was invoked');
    console.log(data);
});


greet(function(data){
    console.log('The callback was invoked');
    console.log(data.name);
});