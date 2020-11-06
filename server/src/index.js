const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000

require("dotenv").config()
db = require("./db/db.js")
app.use(cors())
app.use(express.json())

//Models
const Card = require("./db/models/card")
const State = require("./db/models/card")

//Routes
app.get("/cards", (req, res) => {
    Card.find({}, (err, cards) => {
        if (err) return err

        if (cards) {

            res.json({ data: cards })
        }
        else {
            res.status(404).json({ data: null })
        }
    })
})

app.get("/states", (req, res) => {
    State.find({}, (err, states) => {
        if (err) return err

        if (states) {

            res.json({ data: states })
        }
        else {
            res.status(404).json({ data: null })
        }
    })
})

app.get("/5cards", (req, res) => {
    Card.find({}, (err, cards) => {
        if (err) return err

        if (cards) {
            var i
            var fiveCards = []
            for (i = 0; i < 5; i++) {
                fiveCards.push(cards[i])
            }
            /*
            var arr = [];
            while (arr.length < 8) {
                var r = Math.floor(Math.random() * 100) + 1;
                if (arr.indexOf(r) === -1) arr.push(r);
            }
            */
            res.json({ data: fiveCards })
        }
        else {
            res.status(404).json({ data: null })
        }
    })
})

app.post("/create-card", (req, res) => {
    const card = new Card(req.body)
    card.save()
        .then(_ => res.json({
            card: req.body
        }))
        .catch(err => res.status(400).json({
            message: err.message
        }))
})

app.post("/create-state", (req, res) => {
    const state = new State(req.body)
    state.save()
        .then(_ => res.json({
            state: req.body
        }))
        .catch(err => res.status(400).json({
            message: err.message
        }))
})



app.listen(PORT, () => {
    console.log("App running at port 5000")
})