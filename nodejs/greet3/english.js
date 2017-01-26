var greetings = require('./greetings.json'); //if you
//require a json file, a js object is generated
//and assigned to greetings variable

var greet = function(){
    console.log(greetings.en);
}

module.exports = greet;