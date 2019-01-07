const express = require('express')
const authRouter = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

//Get All

authRouter.get("/", (req, res, next) => {
    // return res.status(200).send("Hello")
    console.log("Im")
    User.find((err, users) => {
        console.log("hey")
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

//Signup Post Route
authRouter.post("/signup", (req, res, next) => {
    //Look for user with the requested username
    console.log(req.body)
    User.findOne({email: req.body.email}, (err, existingUser) => {
        if(err){
            res.status(500)
            return next(err)
        //If the db doesn't return "null", it means there is already a user with that username
        }else if (existingUser !== null){
            res.status(400)
            return next(new Error("That username already exists!"))
        }
        //Create new user from the req.body
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err){
                res.status(500)
                return next(err)
            }
             //Give the user a jwt token
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success: true, user: user.toObject(), token})
        })
    })
})

//Login Post Route

authRouter.post("/login", (req,res, next) => {
    //Find the user with the submitted username
    User.findOne({email: req.body.email.toLowerCase()}, (err, user) => {
        if(err){
        res.status(500)
        return next(err)
        }
        //If submitted user isn't in the db or password is wrong:
        if(!user || user.password !== req.body.password){
            res.status(403)
            return next( new Error("Username or password are incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        //Send the token back to the client app
        return res.status(201).send({token: token, user: user.toObject(), success: true})
    })
})

module.exports = authRouter