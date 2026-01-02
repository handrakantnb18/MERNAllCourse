
// 112 - Provide the request payload to the route with post method using request.body

const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());


app.post("/home", function(request, response){
    request.status(200).json(request.Body);
});

app.listen(port, () => {
    console.log("[>>>>>>] Data is available in the Port :", port);
});