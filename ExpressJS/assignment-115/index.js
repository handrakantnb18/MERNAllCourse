
const event = require("events");

const eventEmit = new event();


function welcomeOne(){
    setTimeout(function() {
        console.log("Welcome to the first function....")
    }, 3000);
};

function welcomeTwo() {
    setTimeout(function(){
        console.log("welcome to the second function....")
    }, 3000);
};

eventEmit.on("Welcome", welcomeOne);
eventEmit.on("Welcome", welcomeTwo);

module.exports = {eventEmit, welcomeOne, welcomeTwo};
