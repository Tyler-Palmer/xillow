const express = require('express')
const wishListRouter = express.Router()
const WishHouse = require('../models/Wishlist')
const ListingCollection = require("../models/listingCollection")
 

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

wishListRouter.get('/:userID/:productID', (req,res,next) => {
    WishHouse.findOne({user: req.params.userID, _id: req.params.productID}, (err, wishHouse) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(wishHouse)
    })
})

//Post one
wishListRouter.post('/:userID/:productID', async (req,res,next) => {
    const product  = await ListingCollection.findOne({_id: req.params.productID})
    WishHouse.update({userID: req.params.userID}, {$push: { Wishlist: {product}}}, (err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

module.exports = wishListRouter