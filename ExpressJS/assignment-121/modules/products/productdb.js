const userModel = require("../../models/users.model");
const productdb = {};

productdb.addProduct = userDetails => userModel.create(userDetails);

productdb.getProduct = (filters = {}) => userModel.find(filters);

productdb.getProductById = id => userModel.findById(id);

productdb.getProductByEmail = email => userModel.findOne({ email });

productdb.getAllProduct = (filters) => { return userModel.find(filters) };

productdb.deleteProductById = id => userModel.findByIdAndDelete(id);

productdb.updateProductById = (id, updateData) =>
  userModel.findByIdAndUpdate(id, { $set: updateData }, { new: true });

module.exports = productdb;

