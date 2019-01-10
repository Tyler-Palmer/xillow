const express = require('express')
const authRouter = express.Router()
const User = require('../models/User.js')
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

//Get One User

authRouter.get("/:id", (req, res, next) => {
    const userID = req.params.id
    User.findOne({_id: userID}, (err, user) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(user)
    })
})

//Signup Post Route
authRouter.post("/signup", (req, res, next) => {
    //Look for user with the requested username
    console.log(req.body)
    User.findOne({ email: req.body.email }, (err, existingUser) => {
        //If the db doesn't return "null", it means there is already a user with that username
        if (existingUser !== null) {
            res.status(400)
            return next(new Error("That username already exists!"))
        }

        //If nothing submitted
        if (!req.body.email || !req.body.password) {
            res.status(400)
            return next(new Error("You must enter an email address and password"))
        }
        if (err) {
            res.status(500)
            return next(err)
        }
        //Create new user from the req.body
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            //Give the user a jwt token
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ success: true, user: user.withoutPassword(), token })
        })
    })
})

//Login Post Route

authRouter.post("/login", (req, res, next) => {
    //Find the user with the submitted username
    User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
  
        //If nothing submitted
        if (!req.body.email || !req.body.password) {
            res.status(400)
            return next(new Error("You must enter an email address and password"))
        }
        //If submitted user isn't in the db or password is wrong:
        if (!user) {
            res.status(403)
            return next(new Error("Username or password are incorrect"))
        }

        if (err) {
            res.status(500)
            return next(err)
        }

        user.checkPassword(req.body.password, (err, match) => {
            console.log("Hey")
            if (err) {
                res.status(500)
                return next(err)
            }
            if (!match) {
                res.status(401)
                return next(new Error("Username or password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            //Send the token back to the client app
            return res.status(200).send({ token: token, user: user.withoutPassword(), token })
        })
    })
})

module.exports = authRouter