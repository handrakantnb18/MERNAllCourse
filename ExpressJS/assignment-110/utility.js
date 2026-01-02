
const event = require("events");
const eventEmit = new event();

function employee(){
    setTimeout(function(){
        console.log("Employee one");
    });
}

function product(){
    setTimeout(function(){
        console.log("Product One")
    })
}

eventEmit.on("emp", employee);
eventEmit.on("emp", product);

module.exports = {eventEmit, employee, product };