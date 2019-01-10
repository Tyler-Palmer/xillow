const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SavedHouseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    savedHouse: [{
        type: Object,
        default: []
    }]
})

module.exports = mongoose.model("SavedHouse", SavedHouseSchema)