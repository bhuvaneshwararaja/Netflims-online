const mongoose = require('mongoose')

const URI = "mongodb+srv://Netfilms:bhuvanesh@netfilms.7efmj.mongodb.net/user?retryWrites=true&w=majority"
const connectDB = () => {
    mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log("db connected")
}

module.exports = connectDB
