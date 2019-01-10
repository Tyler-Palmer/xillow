const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SavedHouseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    wishList: [{
        type: Object
    }]
})

module.exports = mongoose.model("SavedHouse", SavedHouseSchema)