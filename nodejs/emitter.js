//tested in app5.js

function Emitter(){
    this.events = {
        prop: []
    };
    //events is an object
}

//Prototype of any object created with this 
//function constructor
Emitter.prototype.on = function(type,listener){
    //type = type of event that I want
    this.events[type] = this.events[type] || [];
    //if this.events[type] exists great, if not 
    //create an empty array
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;