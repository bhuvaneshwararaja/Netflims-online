const mongoose = require('mongoose')

const URI = "your db url"
const connectDB = () => {
    mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log("db connected")
}

module.exports = connectDB
