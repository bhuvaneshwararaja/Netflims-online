const mongoose = require('mongoose')

const URI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const connectDB = () => {
    mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log("db connected")
}

module.exports = connectDB
