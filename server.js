const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const connectDB = require('./db/connection')
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
connectDB()
const port = 8080
app.use(express.json())
app.use("/",require("./routes"))
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}
app.listen(process.env.PORT || port,(req,res) => [
    console.log("server start at port 8080")
])