//The Node Event Emitter
//adv: avoid a lot if-then statements

var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Somewhere, someone said hello');
});

emtr.on('greet',function(){
    console.log('A greeting occurred');
});

emtr.emit('greet');