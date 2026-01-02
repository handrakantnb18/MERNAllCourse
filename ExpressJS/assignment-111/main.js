// 111 - Create routes with GET, POST, PUT, PATCH, DELETE method and access the same API's on any HTTP client
//  GET, POST, PUT, PATCH, DELETE method

const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());



// app.get("/cricket", function(request, response){
  // response.status(200).send("Data Will be send using GET method");
//     response.status(200).send("This route is retrive the data..");
// });

// post method is used and cricket API is used

// app.post("/cricket", function(request, response){
//     response.status(200).send("This route is store the data..");
// })

// put method is used and product API (route ) is used

// app.put("/cricket", function(request, response){
//     response.status(200).send("This route is update the data..")
    
// })

// patch method is used and product API

// app.patch("/cricket", function(request, response){
//     response.status(200).send("This route is update single value...")
// })

// app.delete("/cricket", function(request, response){
//     response.status(200).send("This route is dalete all data..");
// });

app.post("/home", function(request, response){
    response.status(201).json(request.Headers);
});

app.post("/home1", function(request, response){
    request.status(200).json(request.Body);
});

app.post("/home:userId", function(request, response){
    response.status(200).send("route this parameter = " +request.param.userId);
});

app.listen(port, () => {
    console.log("[>>>>>>] Data is available in the Port :", port);
});