const mongoose = require('mongoose')

const URI = "mongodb+srv://Netfilms:bhuvanesh@netfilms.7efmj.mongodb.net/user?retryWrites=true&w=majority"
const connectDB = () => {
    mongoose 
    .connect(URI, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,   })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
   
}

module.exports = connectDB
