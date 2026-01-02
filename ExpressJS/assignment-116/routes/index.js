// 116 - Create a separate directory and router file and attach the router segments using import export method

const express = require("express");
const router = express.Router();

const app = express();

router.get("/home", function( request, response){
    response.status(200).send("Welcome to GET method...!!!")
});

router.post("/home", function(request, response){
    response.status(200).send("Welcome to POST method...!!!")
});

router.put("/home", function(request, response){
    response.status(200).send("Welcome to PUT method...!!!")
});

router.patch("/home", function(request, response){
    response.status(200).send("Welcome to PATCH method...!!!")
});

router.delete("/home", function(request, response){
    //indexOne.eventEmit.emit("Welcome");
    response.status(200).send("Welcome to DELETE method...!!!")
});

router.use(function(request, response){   
    response.status(200).send("Welcome method......!!!")
});

module.exports = router;