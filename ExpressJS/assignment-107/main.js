// 107 - Pass the data to render function and print the value in .ejs file

const express = require(`express`);

const app = express();
const path = require("path");
const portNumber = 3000;

app.set(`view engine`, `ejs`);
app.set("views", "./public");

app.use(express.static(path.join(__dirname, "public")));

// 1 - index.ejs file in public folder

app.get('/index', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("index", {data: ["Pune", "Mumbai", "Banglore", "Dehli","Surat"]});
    
});

app.listen(portNumber, function(request, response){
    console.log("Pass the data to render function and print the value in .ejs file", portNumber)
})