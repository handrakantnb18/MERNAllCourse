const express = require("express");
const router = express.Router();

const addUser = require("./addUsers");
const getUsers = require("./getUsersServices");
const deleteUsers = require("./deleteUsers");
const updateUsers = require("./updateUsers");
const mongoDBConnect = require("./usersdb");

router.post("/add-product", addUser.addUser);
router.get("/get-product", getUsers.getUser);
router.get('/get-product-by-id/:id', getUsers.getUserById);
router.get("/get-product/email/:email", getUsers.getUserByEmail);
router.get("/get-all-product", getUsers.getAllUsers);
router.put("/update-product/:id", updateUsers.updateUserById);
router.delete("/delete-product/:id", deleteUsers.deleteUserById);

module.exports = router;