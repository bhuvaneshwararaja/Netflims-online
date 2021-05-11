const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    fav:[],
    watchlist:[]
  
  })
  
  const User = new mongoose.model("User",userSchema);

  module.exports = {User, userSchema}