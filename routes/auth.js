const express = require('express')
const User = require('../models/User')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post("/signup", (req, res) => {
    //Look for user with the requested username
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if(err){
            return res.status(500).send({success: false, err})
        //If the db doesn't return "null", it means there is already a user with that username
        }else if (existingUser !== null){
            return res.status(400).send({success: false, err: "That username already exists!"})
        }
        //Create new user from the req.body
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({success: false, err})
             //Give the user a jwt token
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success: true, user: user.toObject(), token})
        })
    })
})

authRouter.post("/login", (req,res) => {
    //Find the user with the submitted username
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) return res.status(500).send(err)
        //If submitted user isn't in the db or password is wrong:
        if(!user || user.password !== req.body.password){
            return res.status(403).send({success: false, err: "Username or password are incorrect"})
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        //Send the token back to the client app
        return res.status(201).send({token: token, user: user.toObject(), success: true})
    })
})

module.exports = authRouter