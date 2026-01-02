// 117 - Implement the middleware functionality

const express = require("express");

const app =express();
const port = 3000;
const middlewareData = require(`./module/index`)


app.use("/configer", middlewareData);
app.use(express.json());

app.listen(port, () =>{
    console.log("[>>>>>>>>] working on the PORT : ", port)
});