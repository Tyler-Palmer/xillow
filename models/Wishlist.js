const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishlistSchema = new Schema({
    placeholder:{
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

module.exports = mongoose.model("Wishlist", WishlistSchema)