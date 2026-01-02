// 102 - Implement the 404 route using express
// npm init -y
// 404 status route not found  -- without using route app.use function
// npm install express
// npm install nodemon -save-dev
// npm run start
//  start : "nodemon main.js" automaticlly run the file in the port

const express = require(`express`);

const app = express();

const portNumber = 3000;

app.get('/home', (request, response) =>{
    response.send("Hello welcome to HTML Language..");
});


app.use(function(request, response){
    response.status(404).send("404 not found");
});

app.listen(portNumber, function() {
    console.log("All files are running on port number 3000... ", portNumber)
});
