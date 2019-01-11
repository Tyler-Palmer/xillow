const express = require('express')
const SavedHouseRouter = express.Router()
const SavedHouse = require('../models/SavedHouse')
const ListingCollection = require("../models/listingCollection")


//Get All

SavedHouseRouter.get('/', (req, res, next) => {
    SavedHouse.find((err, houses) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(houses)
    })
})

//Get all of a specific user's houses

SavedHouseRouter.get('/:userID', (req,res,next) => {
    SavedHouse.find({user:req.params.userID}, (err, houses) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        console.log('this route')
        return res.status(200).send(houses)
    })
})

//Get specific product from a specific user

SavedHouseRouter.get('/:userID/:productID', (req, res, next) => {
    SavedHouse.findOne({ user: req.params.userID, _id: req.params.productID }, (err, house) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(house)
    })
})


//Post one to db (nonspecific)

SavedHouseRouter.post('/', (req, res, next) => {
    const house = new SavedHouse(req.body)
    house.save((err, house) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(house)
    })
})

//Post any house to specific user
SavedHouseRouter.post('/:userID', (req, res, next) => {
    const product = new SavedHouse(req.body)
    product.user = req.params.userID
    product.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

//Post specific house to specific user
SavedHouseRouter.post('/:userID/:productID', async (req, res, next) => {
    const product = await ListingCollection.findOne({ _id: req.params.productID })
    product.id = req.params.productID
    console.log(product)
    SavedHouse.findOne({ user: req.params.userID }, (err, userCollection) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (userCollection !== null) {
            SavedHouse.findOneAndUpdate({ user: req.params.userID }, { $push: { savedHouse: product } }, { new: true }, (err, data) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(userCollection)
            })
        } else {
            const newHouse = new SavedHouse()
            newHouse.user = req.params.userID
            newHouse.save((err, newHouse) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                SavedHouse.findOneAndUpdate({ user: req.params.userID }, { $push: { savedHouse: product } }, { new: true }, (err, data) => {
                    if (err) {
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(data)
                })
            })
        }
    })
})

//Delete One User House

SavedHouseRouter.put('/:userID/:houseID', async (req, res, next) => {
    const user = await SavedHouse.findOne({user: req.params.userID})
    console.log(user)
    SavedHouse.findOne({user: req.params.userID}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        const userHouse = user.toObject()
        console.log(userHouse)
        
        if (user !== null){
            SavedHouse.update({savedHouse: deleteHouse}, {$pull: {_id: deleteHouse}}, (err, data) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(202).send(data)
            })
        }
    })
})

module.exports = SavedHouseRouter

//Delete Attempt

// SavedHouseRouter.put('/:userID/:houseID', async (req, res, next) => {
//     const user = await SavedHouse.findOne({user: req.params.userID})
//     console.log(user)
//     SavedHouse.findOne({user: req.params.userID}, (err, user) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         const deleteHouse = req.params.houseID
//         console.log(deleteHouse)
//         if (user !== null){
//             SavedHouse.update({savedHouse: deleteHouse}, {$pull: {_id: deleteHouse}}, (err, data) => {
//                 if(err){
//                     res.status(500)
//                     return next(err)
//                 }
//                 return res.status(202).send(data)
//             })
//         }
//     })
// })


// {
//     "data": {
//         "user": {
//             "_id": "5c33c92a04987a7048f6c6d4",
//             "isAdmin": false,
//             "email": "johndoe@gmail.com",
//             "password": "$2b$10$7AGBe/DbAUd673feDJHdAuR6HpdNh5ktifaIwIMFCnra4oh6BtTSy",
//             "__v": 0
//         },
//         "savedHouse": [{
//             "_id": "5c357a313aea496d5766685a",
//             "listings": {
//                 "title": "1.75 Baths",
//                 "title_link": "https://www.redfin.com/UT/Salt-Lake-City/5536-S-3465-W-84129/home/86449414",
//                 "price": "$295,000",
//                 "bedrooms": "4 Beds",
//                 "address": "5536 S 3465 W, Taylorsville, UT 84129",
//                 "area": "1,604 Sq. Ft.",
//                 "viewing_time": "HOT HOME",
//                 "Headline": "5536 S 3465 W",
//                 "property_overview": "Property TypeSingle FamilyProperty StyleSplit-Entry/Bi-LevelCommunityMagna; Taylrsvl; Wvc; SlcCountySalt LakeMLS#1574036Built1982Lot Size6,098 square feet",
//                 "main_image": "https://ssl.cdn-redfin.com/photo/171/mbpaddedwide/036/genMid.1574036_0.jpg",
//                 "description": "Awesome remodeled home in a great neighborhood! White shaker cabinets, quartz countertops  &  stainless steel appliances in the kitchen. French doors open to a covered back patio. All new windows, flooring, custom tile  &  modern fixtures throughout. New furnace and central A/C. Corner lot with a lot of yard to work with, tons of RV parking  &  a workshop. Oversized 2 car garage with brand new door. Call now for a private showing!",
//                 "thumbnail_preview": "https://ssl.cdn-redfin.com/photo/ldpsprite/513/nsprite.99103513_0.jpg",
//                 "Transp_header": "Transportation in 84129",
//                 "transp_score": "30 / 100Car-DependentWalk Score®36 / 100Some TransitTransit Score®42 / 100Somewhat BikeableBike Score®",
//                 "walk_score": "30 / 100Car-DependentWalk Score®",
//                 "transit_score": "36 / 100Some TransitTransit Score®",
//                 "biking_score": "42 / 100Somewhat BikeableBike Score®"
//             },
//             "__v": 0
//         }]
//     }
// }