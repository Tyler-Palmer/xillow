const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    wishList: [{
        type: Object
    }]
})

module.exports = mongoose.model("Wishlist", WishlistSchema)