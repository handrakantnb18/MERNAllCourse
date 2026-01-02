// 109 - Implement the off event method to the event

const express = require("express");
const app = express();

const port = 3000;
const utility = require("./utility");

app.get("/", function(request, response){
    
    utility.eventEmit.emit("eventOff");
    utility.eventEmit.off("eventOff", utility.productOne);
   
    utility.eventEmit.off("eventOff", utility.productTwo);
    
    utility.eventEmit.off("eventOff", utility.employee);
    
    utility.eventEmit.off("eventOff", utility.contact);
    
    utility.eventEmit.off("eventOff", utility.servises);

     utility.eventEmit.emit("eventOff");
     utility.eventEmit.emit("eventOff");
    utility.eventEmit.emit("eventOff");
    utility.eventEmit.emit("eventOff");

    response.status(200).send("Welcome To nodeJS and the off event method to the event");

});

app.use(function(request, response){
    console.log("Good");
});

app.listen(port, () => {
     console.log("[>>>>] app is running in port", port);
})