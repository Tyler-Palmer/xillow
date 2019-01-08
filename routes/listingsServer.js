const express = require("express")
const listingServerRouter = express.Router()
const ListingSchema = require("../models/listingServer")


listingServerRouter.get("/", (req, res, next) =>{
    ListingSchema.find((err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

listingServerRouter.get("/:id", (req, res, next) =>{
    ListingSchema.findOne({_id: req.params.id}, (err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})


listingServerRouter.post("/", (req, res, next) => {
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