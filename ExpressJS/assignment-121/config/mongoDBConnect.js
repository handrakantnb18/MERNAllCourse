const mongoose =require("mongoose");

const mongoConnect = mongoose.connect('mongodb+srv://bhosalechandrakant1806:KgL7GlHkXvt9vFgC@cluster0.szxneoz.mongodb.net/SpeedUp?retryWrites=true&w=majority&appName=Cluster0');

 module.exports = mongoConnect;