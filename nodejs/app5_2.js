var Emitter = require('events');
var eventconfig = require('./config');
var emtr = new Emitter();

emtr.on(eventconfig.GREET,function(){
    console.log('Somewhere, over the rainbow');
});

emtr.on(eventconfig.GREET,function(){
    console.log('ok');
});

console.log('lula');
emtr.emit(eventconfig.GREET);

