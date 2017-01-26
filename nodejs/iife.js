
var firstname = 'Adity';
(function(lastname){
    var firstname = 'Pinku';
    console.log(firstname);
    console.log(lastname);
}('Nath'));//the last () invokes the function expression
//we are telling that the function is an expression using outer brackets
//everything inside the outer brackets () is behaving like a module or separate JS file.

console.log(firstname);