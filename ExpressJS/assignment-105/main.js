// 105- Server the static html file using express.static method

const express = require(`express`);
const path = require(`path`);
const app = express();

// read the file
const fs = require(`fs`);

// port number
const portNumber = 3000;

app.use(express.static(path.join("./public/home.html", 'public')));
app.get('/contact', (request, response) => {
    response.setHeader("content-type", "text/html");
    response.status(200);

    // read file
     fs.readFile("./public/home.html", "utf-8", function(error, data){
        response.send(data);
        response.end();
    })
});

app.listen(portNumber, function() {
    console.log("All files are running on port number 3000... ", portNumber)
});
