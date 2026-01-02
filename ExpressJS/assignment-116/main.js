// 116 - Create a separate directory and router file and attach the router segments using import export method

const express = require("express");
const app = express();
const  portNumber = 3000;
const indexOne = require("./routes/index");

app.use(express.json());

app.use("/config", indexOne);


app.listen(portNumber, () => {
    console.log("[>>>>>>>>] data send to the PORT : ", portNumber)
});


