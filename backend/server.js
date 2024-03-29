import express  from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';
//app  config
const app = express()
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://ckkulkarni2712:Chandu2000@cluster0.m5rpmwl.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url)

app.get("/",(req,res) => res.status(200).send("Hello"))
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if(err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

app.listen(port, () => console.log(`listening on localhost`))