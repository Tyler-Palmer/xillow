const express = require('express')
const User = require('../models/User')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post("/signup", (req, res) => {
    //Look for user with the requested username
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if(err){
            return res.status(500).send({success: false, err})
        }
    })
})