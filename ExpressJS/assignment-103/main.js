// 103 - Install the nodemon library and run the app using nodemon

const express = require(`express`);

const app = express();

const portNumber = 3000;

app.get('/home', (request, response) =>{
    response.send("Hello welcome to HTML Language..");
});


app.use( function(request, response){
   // response.method("GET");
    response.status(404).send("404 not found");
    request.header("", "");
    // response.writeHead(statusCode, header);
    // response.end;
});

app.listen(portNumber, function() {
    console.log("All files are running on port number 3000... ", portNumber)
});
