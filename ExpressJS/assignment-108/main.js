// 108 - Implement the event listener by attaching two methods

const express = require("express");
const app = express();

const portNumber = 3000;
const utility = require("./utilityEvents");

app.get("/", function(request, response){
    utility.eventEmit.emit("hello");

    utility.eventEmit.emit("hello");
    response.status(200).send("Listener methods ");
})

app.use( function(request, response){
    console.log("without route change it");
})
app.listen(portNumber, () => {
    console.log("[>>>>] app is running in port", portNumber);
})