// 119 - Perform the CRUD operation using MongoDB and NodeJS

const express = require(`express`);
const cors = require(`cors`);
const app = express();

const userRouters = require("./modules/users/router");
const mongoConnect = require("./config/mongoDBConnect");
const router = require("./modules/users/router");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouters);

mongoConnect
  .then(function () {
    app.listen(3000, function () {
      console.log("Server started successfully!");
      console.log("[>>>>>>] Running on port: 3000");
    });
  })
  .catch(function (error) {
    console.log("Unable to connect to MongoDB...", error);
  });
  