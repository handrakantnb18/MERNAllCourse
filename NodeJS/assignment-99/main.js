
// 99 - Install the nodemon library using npm install command

const express = require(`express`);
const nodemon = require(`nodemon`);


const app =  express();

const portNum1 = 3000;

app.get('/home', (request, response) =>{
    response.send("nodemon library using npm install");
})

app.listen(portNum1, function(){
    console.log("nodemon library using npm install command", portNum1)
});
