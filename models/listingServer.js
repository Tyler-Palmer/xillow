const mongoose = require("mongoose")
const Schema = mongoose.Schema


const listingServer = new Schema({
    title: String,
    title_link: String,
    price: Number,
    bedrooms: String,
    address: String,
    Headline: String,
    area: String,
    viewing_time: String,
    property_overview: String,
    main_image: String,
    description: String,
    thumbnail_preview: String,
    Trans_header: String,
    transp_score: String,
    walk_score: String,
    transit_score: String,
    biking_score: String
})


module.exports  = mongoose.model("ListingServer", listingServer);