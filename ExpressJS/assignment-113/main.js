
// 113 - Provide the parameter to URL and access the same dynamically using GET, PUT, PATHC, DELETE
// GET, PUT, PATHC, DELETE

const express = require("express");

const app = express();
const port = 3000;

const cors =require("cors");
app.use(cors());

app.use(express.json());

app.get("/home", function(request, response){
    response.status(200).json("Well come to Node JS...")
});

app.post("/home", function(request, response){
    response.status(200).json(request.body);
    response.status(201).json(request.headers);
});

app.put("/home", function(request, response){
    response.status(200).json(request.body);
    response.status(200).json(request.headers);
});

app.patch("/home", function(request, response){
    response.status(200).json(request.body);
});

app.delete("/home", function(request, response){
    response.status(200).json(request.body);
});

app.listen(port, () =>{
    console.log("[>>>>>>>>], Data will be route in the : ", port);
});

