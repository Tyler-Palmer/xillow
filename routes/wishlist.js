const express = require('express')
const wishListRouter = express.Router()
const WishHouse = require('../models/Wishlist')

//Get all

wishListRouter.get('/:userID', (req,res,next) => {
    WishHouse.find(({user: req.params.userID}), (err, listings) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(listings)
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