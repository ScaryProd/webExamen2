const mongoose = require("mongoose")

const stateSchema = new mongoose.Schema({
    state: Number,
    cardNames: [String]
})

module.exports = stateSchema