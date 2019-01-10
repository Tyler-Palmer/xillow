const express = require('express')
const wishListRouter = express.Router()
const WishHouse = require('../models/Wishlist')


//Get All

wishListRouter.get('/', (req,res,next) => {
    WishHouse.find((err, houses) => {
        if(err){
            res.send(500)
            return next(err)
        }
        return res.status(200).send(houses)
    })
})

//Get One

wishListRouter.get('/:userID', (req,res,next) => {
    WishHouse.findOne({user: req.params.userID}, (err, wishHouse) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(wishHouse)
    })
})

//Post one
wishListRouter.post('/:userID', (req,res,next) => {
    const newHouse = new WishHouse(req.body)
    newHouse.user = req.params.userID
    newHouse.save((err, newHouse) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newHouse)
    })
})

module.exports = wishListRouter