
const event = require("events");
const eventEmit = new event();

function productOne(){
    setTimeout(function(){
        console.log("The off event method to the event one");
    });
}

function productTwo(){
    setTimeout(function(){
        console.log("The off event method to the event Two");
    });
}

function employee(){
    setTimeout(function(){
        console.log("Employee one");
    });
}

function contact(){
    setTimeout(function(){
        console.log("Contact Number 987654321");
    });
}

function servises(){
    setTimeout(function(){
        console.log("Servises ")
    })
}
eventEmit.on("eventOff", productOne);
eventEmit.on("eventOff", productTwo);
eventEmit.on("eventOff", employee);
eventEmit.on("eventOff", contact);
eventEmit.on("eventOff", servises);

module.exports = {eventEmit, productOne, productTwo, employee, contact, servises };
