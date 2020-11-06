const mongoose = require("mongoose")
const DBUSER = process.env.DB_USERNAME
const DBPASSWORD = process.env.DB_PASSWORD

const connection = `mongodb://${DBUSER}:${DBPASSWORD}@mongo:27017/`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useUnifiedTopology: true
}

mongoose
    .connect(connection, options)
    .then(_=>console.log("Connected to the DB"))
    .catch(err=>console.log(`Connection error: ${err}.message`))

const db = mongoose.connection
module.exports = db