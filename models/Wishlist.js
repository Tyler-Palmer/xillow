const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    wishlistItem: {
        type: Schema.Types.ObjectId,
        ref: "ListingCollection"
    }
})

module.exports = mongoose.model("Wishlist", WishlistSchema)