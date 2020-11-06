const mongoose = require("mongoose")

const CardSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String,
    description: String
})

module.exports = CardSchema