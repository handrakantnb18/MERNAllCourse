// 118 - Import the mongoose library and connect to the DB before the app starts

const express =  require("express");

const app = express();
const port = 3000;
const mongoose = require('mongoose');

const connectResponse = mongoose.connect('mongodb+srv://bhosalechandrakant1806:KgL7GlHkXvt9vFgC@cluster0.szxneoz.mongodb.net/SpeedUp?retryWrites=true&w=majority&appName=Cluster0');
 
app.get("/home", function(request, response){
  response.status(200).send("Database connected...")
});

app.listen(port, function(){
  console.log("Running on port : ", port)
});

