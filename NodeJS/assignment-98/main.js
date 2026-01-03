
// 98 - execute the npm init command to set up / create the application

const express = require(`express`);

const app = express();

const portNumber = 3000;

app.get('/home', (request, response) =>{
    response.send("Hello welcome to express js..");
})

