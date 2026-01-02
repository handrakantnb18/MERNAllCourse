const mongoose  = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstName: String,
    lastName: String,
    age: Number,
    country: String,
    createDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model(`users`, userSchema);