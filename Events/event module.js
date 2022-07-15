var event = require('events');
var eventEmitter = new event.EventEmitter();


// create an event handler
var myHadler = function(){
    console.log("You are on...")
}

// Asiign the event handler ton an event
eventEmitter.on('scream',myHadler);

// Fire  the scream event:
eventEmitter.emit('scream');