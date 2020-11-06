const mongoose = require("mongoose")

const CardSchema = require("./schemas/CardSchema")

module.exports = Card = mongoose.model("Card", CardSchema)