const express = require("express");
const router = express.Router();

const userServices = require("./services");
const getUsers = require("./getUsersServices");
const deleteUsers = require("./deleteUsers");
const updateUsers =require("./updateUsers");

router.post("/add-user", userServices.addUser);
 
router.get("/get-user", getUsers.getUser);

router.delete("/delete-user", deleteUsers.deleteUser);

router.put("/update-user", updateUsers.updateUser);

module.exports = router;
