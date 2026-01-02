const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    email: String,
    age: Number,
    createDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('users', userSchema);
