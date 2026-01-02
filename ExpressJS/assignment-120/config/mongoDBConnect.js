const mongoose =require("mongoose");

// const connectResponse = mongoose.connect('mongodb+srv://bhosalechandrakant1806:KgL7GlHkXvt9vFgC@cluster0.szxneoz.mongodb.net/SpeedUp?retryWrites=true&w=majority&appName=Cluster0');

//  module.exports = connectResponse;

 const mongoDBConnect = mongoose.connect(`mongodb+srv://bhosalechandrakant1806:KgL7GlHkXvt9vFgC@cluster0.szxneoz.mongodb.net/SpeedUp?retryWrites=true&w=majority&appName=Cluster0`);

 module.exports = mongoDBConnect;
 