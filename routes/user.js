const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const connectDB = require("../db/connection")
const {User,userSchema} = require('../models/user')
const md5 = require('md5')
const {
    checkpass,
    checkusername,
    checkpassword,
    checkmail
} = require("../validation/validate.js")
connectDB()
router.post("/login",(req,res) => {
    User.findOne({email:req.body.user.email,password:md5(req.body.user.password)},(err,found) => {
        if(found){
            res.send({"user":found._id})
        }
        else{
            res.send({"notfound":true})
        }
    })
})
router.post("/register",(req,res) =>{
    console.log(req.body)
    const usererr = checkusername(req.body.user.username)
   const passerr =  checkpass(req.body.user.password, req.body.user.confirmpassword)
   const passcheck = checkpassword(req.body.user.password)
   const emailcheck = checkmail(req.body.user.email)
  
  
   const errormess = {
    userError:usererr,
    emailError:emailcheck,
    passwordError:passcheck,
    matchingError:passerr
}
const user = new User({
    username:req.body.user.username,
    email:req.body.user.email,
    phone:req.body.user.mobile,
    password:md5(req.body.user.password)
  })
if(usererr === true && passerr === true && emailcheck === true&&passcheck === true)
{
   User.findOne({email:req.body.user.email},(err,found) => {
       if(!found){
            user.save((err,currentuser) => {
                if(!err){
                    res.send({"isupdated":currentuser})
                }
                else{
                    console.error(err)
                }
            })
       }
       else{
           res.send({"ispresent":true})
       }
   }) 
   
}
else{
   res.send({"iserror":errormess})
}
})
router.post("/fav",(req,res) => {
    User.findOneAndUpdate({_id:req.body.user.id},{$addToSet:{fav:req.body.user.movie}},(err) => {
        if(!err){
            console.log("success")
        }
        else{
            console.log("err")
        }
    })
  
 
})
router.post("/watchlist",(req,res) => {
    User.findOneAndUpdate({_id:req.body.user.id},{$addToSet:{watchlist:req.body.user.movie}},(err) => {
        if(!err){
            console.log("success")
        }
        else{
            console.log("err")
        }
    })
 
})
router.post("/favlist",(req,res) => {
    User.findOne({_id:req.body.user.id},(err,found) => {
        if(!err){
            res.send({fav:found.fav})
        }
    })
})
router.post("/watch",(req,res) => {
    User.findOne({_id:req.body.user.id},(err,found) => {
        if(!err){
            res.send({watchlist:found.watchlist})
        }
    })
})

module.exports = router