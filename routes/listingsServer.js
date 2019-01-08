const express = require("express")
const listingServerRouter = express.Router()
const ListingSchema = require("../models/listingServer")

listingServerRouter.post("/", (req, res, next) => {
    const newListing = new ListingSchema;
    newListing.save((err, data)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})


module.exports = listingServerRouter