const mongoose = require("mongoose")

const StateSchema = require("./schemas/StateSchema")

module.exports = State = mongoose.model("State", StateSchema)