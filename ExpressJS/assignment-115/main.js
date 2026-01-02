// 115 - Create the router using express.router with different methods

const express = require("express");
const app = express();

const portNumber = 3000;
const indexOne = require("./index");

app.get("/home", function(response, request){
    response.status(200).send("Welcome to GET method...!!!");

});

app.post("/home", function(request, response){
    response.status(200).send("Welcome to POST method...!!!")
});

app.put("/home", function(request, response){
    response.status(200).send("Welcome to PUT method...!!!")
});

app.patch("/home", function(request, response){
    response.status(200).send("Welcome to PATCH method...!!!")
});

app.delete("/home", function(request, response){
    indexOne.eventEmit.emit("Welcome");
    request.status(200).send("Welcome to DELETE method...!!!")
});

app.use(function(request, response){
    
    response.status(200).send("Welcome method......!!!")
});

app.listen(portNumber, function(request, response){
    console.log("[>>>>>>>>] data send to the PORT : ", portNumber)
});

indexOne.eventEmit.emit("Welcome");
