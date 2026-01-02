
// 104- Server the static html file using fs module

const express = require(`express`);

const app = express();
const fs = require(`fs`);

const portNumber = 3000;

app.get('/home', (request, response) =>{
    response.setHeader("content-type", "text/html");
    response.status(200);
    //response.send("Hello welcome to HTML Language..");

     fs.readFile("./public/index.html", "utf-8", function(error, data){
        response.send(data);
        response.end();
    })
});

app.listen(portNumber, function() {
    console.log("All files are running on port number 3000... ", portNumber)
});
