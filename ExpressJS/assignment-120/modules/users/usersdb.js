const userModel = require("../../models/users.model");
const usersdb = {};

usersdb.addUser = userDetails => userModel.create(userDetails);

usersdb.getUser = (filters = {}) => userModel.find(filters);

usersdb.getUserById = id => userModel.findById(id);

usersdb.getUserByEmail = email => userModel.findOne({ email });

usersdb.getAllUsers = (filters) => { return userModel.find(filters) };

usersdb.deleteUserById = id => userModel.findByIdAndDelete(id);

usersdb.updateUserById = (id, updateData) =>
  userModel.findByIdAndUpdate(id, { $set: updateData }, { new: true });

module.exports = usersdb;

