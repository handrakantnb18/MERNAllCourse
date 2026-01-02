const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    email: String,
    price: Number,
    createDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('products', userSchema);
