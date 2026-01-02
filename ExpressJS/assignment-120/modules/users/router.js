const express = require("express");
const router = express.Router();

const addUser = require("./addUsers");
const getUsers = require("./getUsersServices");
const deleteUsers = require("./deleteUsers");
const updateUsers = require("./updateUsers");
const mongoDBConnect = require("./usersdb");

router.post("/add-user", addUser.addUser);
router.get("/get-user", getUsers.getUser);
router.get('/get-user-by-id/:id', getUsers.getUserById);
router.get("/get-user/email/:email", getUsers.getUserByEmail);
router.get("/get-all-users", getUsers.getAllUsers);
router.put("/update-user/:id", updateUsers.updateUserById);
router.delete("/delete-user/:id", deleteUsers.deleteUserById);

module.exports = router;