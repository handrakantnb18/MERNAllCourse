// 101 - Install the express library and create 5 different routes with get method
// /html, /css are routes name

const express = require(`express`);

const app = express();

const portNumber = 3000;

app.get('/html', (request, response) =>{
    response.send("Hello welcome to HTML Language..");
});

app.get('/css', (request, response) =>{
    response.send("Hello welcome to CSS ..");
});

app.get('/javascript', (request, response) =>{
    response.send("Hello welcome to javaScript js..");
});

app.get('/nodejs', (request, response) =>{
    response.send(" welcome to node js..");
});

app.get('/expressjs', (request, response) =>{
    response.send(" welcome to express js..");
})

app.get(`/reactjs`, (request, response) =>{
    response.send("react us file here..")
})

app.use( function(request, response){
    response.status(404).send("404 not found in database");
});

app.listen(portNumber, function() {
    console.log("All files are running on port number 3000... ", portNumber)
});
