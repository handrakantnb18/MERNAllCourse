// 106 -  Install ejs library and render the file in the routs

const express = require(`express`);


const app = express();
const path = require("path");
const portNumber = 3000;

app.set(`view engine`, `ejs`);
app.set("views", "./public");
// app.set("views", "./publicone");

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "publicone")));


// 1 - index.ejs file in public folder

app.get('/index', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("index", {data: ["Banana", "Apple", "Orange", "Mango"]});
    
});

// 2 - home.ejs file folder in public

app.get('/home', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("home", {data: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS"]});
    
});

// 3 - about.ejs file folder public

app.get('/about', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("about", {data: ["Java", "Python", "C#", "C++"]});
    
});

// 4 - contact.ejs file and public folder

app.get('/contact', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("contact", {data: ["React JS", "Angular JS", "Ractive Native", "Vue JS"]});
    
});

//  5- servises.ejs file and public folder

app.get('/servises', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("servises", {data: ["MongoBD", "MySQL", "Oracle", "SQL", "GraphSQL"]});
    
});

// 6 - blogs.ejs file and public folder

app.get('/blogs', function (request, response) {
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("blogs", {data: ["Express", "Spring", "SpringBoot", "Hibernate", "ECMAScript"]});
    
});

// 7 - dropdown.ejs file and public folder

app.get('/dropdown', function(request, response){
    response.setHeader("content-type", "text/html");
    response.status(200);
    response.render("dropdown", {data: ["Rohit Sharma", "Virat Kohli", "Sachin Tendulkar", "Ravindra Jadeja", "Shubhaman Gil"]})
})

app.listen(portNumber, function()
{
    console.log("Welcome to new render the file in the routs", portNumber)
});
