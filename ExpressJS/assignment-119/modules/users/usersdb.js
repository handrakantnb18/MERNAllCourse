const usersdb = {};
const userModel = require("./../../models/users.model");

usersdb.addUser = function(userDetails) {
  return userModel.create(userDetails);
};

usersdb.getUser = function(filters) {
  return Promise.resolve([{ firstName: "rohit", lastName: "sharma" }]);
};

usersdb.deleteUser = function(filters) {
  return Promise.resolve({ message: "User deleted successfully!" });
};

usersdb.updateUser = function(filters, updateData) {
  return userModel.updateOne(filters, { $set: updateData });
};


module.exports = usersdb;
