const mongoose = require("mongoose")
const Schema = mongoose.Schema
const paginate = require("mongoose-paginate")

const listingCollection = new Schema({
    listings: {
        type: Object
    }
})

listingCollection.plugin(paginate)
module.exports = mongoose.model("ListingCollection", listingCollection)