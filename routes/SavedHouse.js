const express = require('express')
const SavedHouseRouter = express.Router()
const SavedHouse = require('../models/SavedHouse')
const ListingCollection = require("../models/listingCollection")
 

//Get All

SavedHouseRouter.get('/', (req,res,next) => {
    SavedHouse.find((err, houses) => {
        if(err){
            res.send(500)
            return next(err)
        }
        return res.status(200).send(houses)
    })
})

//Get One

SavedHouseRouter.get('/:userID/:productID', (req,res,next) => {
    SavedHouse.findOne({user: req.params.userID, _id: req.params.productID}, (err, house) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(house)
    })
})

//Post one
SavedHouseRouter.post('/:userID/:productID', async (req,res,next) => {
    const product  = await ListingCollection.findOne({_id: req.params.productID})
    SavedHouse.update({userID: req.params.userID}, {$push: { Wishlist: {product}}}, (err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

module.exports = SavedHouseRouter