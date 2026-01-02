
// 100 - Install the express library and create the serve

const express = require(`express`);

const app =  express();

const portNum = 3000;

app.get('/home', (request, response) =>{
    response.send("express library and create the serve");
})

app.listen(portNum, function(){
    console.log("express library and create the serve", portNum)
});
