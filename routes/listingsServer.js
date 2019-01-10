const express = require("express")
const listingServerRouter = express.Router()
const ListingSchema = require("../models/listingServer")
const ListingCollection = require("../models/listingCollection")

listingServerRouter.get("/", (req, res, next) => {
    ListingCollection.find((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})


listingServerRouter.get("/listingCollection", (req, res, next) =>{
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
    console.log(req.body)
    const newListing = new ListingSchema(req.body);
    newListing.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

// listingServerRouter.post("/listingCollection", (req, res, next) => {
//     for (let each of req.body) {
//         // each.id = uuid()
//         const newData = new ListingCollection({ listings: each })
//         newData.save((err, data) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             console.log(data)
//         })
//     }
// })

module.exports = listingServerRouter