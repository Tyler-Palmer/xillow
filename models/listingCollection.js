const mongoose = require("mongoose")
const Schema = mongoose.Schema

const listingCollection = new Schema({
    listings: {
        type: Object
    }
})

module.exports = mongoose.model("ListingCollection", listingCollection)