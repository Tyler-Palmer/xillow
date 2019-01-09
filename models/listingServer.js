const mongoose = require("mongoose")
const Schema = mongoose.Schema


const listingServer = new Schema({
    title: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    title_link: {
        type: String
    },
    price: {
       type: Number,

    },
    bedrooms: {
        type: String, 
    },
    address: {
        type: String,
        required: true,
    },
    Headline: String,
    area: String,
    viewing_time: String,
    property_overview: String,
    main_image: {
        type: String,
        required: true
    },
    description: String,
    thumbnail_preview: String,
    Trans_header: String,
    transp_score: String,
    walk_score: String,
    transit_score: String,
    biking_score: String
})


module.exports  = mongoose.model("ListingServer", listingServer);