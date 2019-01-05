const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const WishlistSchema = new Schema({
    placeholder:{
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = Mongoose.model("Wishlist", WishlistSchema)