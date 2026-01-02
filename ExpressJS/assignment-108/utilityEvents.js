const event = require("events");

const eventEmit = new event();

function display(){
    setTimeout(function(){
        console.log("Welcome to NodeJS One");

    }, 5000);
}

function demo(){
    setTimeout(function(){
        console.log("Welcome to NodeJS Two");

    }, 3000);
}

eventEmit.on("hello", display);
eventEmit.on("hello", demo);

module.exports = {eventEmit, display, demo};
