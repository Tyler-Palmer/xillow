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
    area: String,
    viewing_time: String,
    property_overview: String,
    main_image: {
        type: String,
        required: true
    },
    thumbnail_preview: String,
    description: {
        type: String
    }   
})


module.exports  = mongoose.model("ListingServer", listingServer);