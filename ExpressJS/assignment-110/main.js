// 110 - Remove all listerers from the event
const express = require("express");
const app = express();

const portNumber = 3000;
const utility = require("./utility");

app.get("/", function(request, response){
    utility.eventEmit.emit("emp");

    utility.eventEmit.removeAllListeners("emp");
    
    utility.eventEmit.emit("emp");
    response.status(200).send("All Data Deleted...  ");
})

app.listen(portNumber, () => {
    console.log("[>>>>] app is running in port", portNumber);
})

