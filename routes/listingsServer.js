const express = require("express")
const listingServerRouter = express.Router()
const ListingSchema = require("../models/listingServer")

listingServerRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const newListing = new ListingSchema(req.body);
    newListing.save((err, data)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})


module.exports = listingServerRouter