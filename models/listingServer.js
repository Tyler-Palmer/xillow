const mongoose = require("mongoose")
const Schema = mongoose.Schema


const listingServer = new Schema({
    title: {
        type: String
    },
    title_link:{
        type: String
    },
    price:{
        type: Number
    },
    bedrooms:{
        type: String
    },
    address: {
        type: String
    },
    Headline: {
        type: String
    },
    area: {
        type: String
    },
    viewing_time: {
        type: String
    },
    property_overview: {
        type:String
    },
    main_image: {
        type: String
    },
    description: {
        type: String
    },
    thumbnail_preview: {
        type: String
    },
    Trans_header: {
        type: String
    },
    transp_score: {
        type: String
    },
    walk_score: {
        type: String
    },
    transit_score: {
        type: String
    },
    biking_score: {
        type: String
    }
})


module.exports  = mongoose.model("ListingServer", listingServer);