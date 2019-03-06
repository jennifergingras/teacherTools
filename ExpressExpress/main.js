const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3001;


app.use(morgan('dev'))

app.get("/", (req, res) => {
    console.log(req.params)
    res.send("Welcome to the Machine")
})

app.get("/profile", (req, res) => {
    console.log(req.params)
    res.send("This is the profile page")
})

app.get("/profile/:id", (req, res) => {
    console.log(req.params)
    res.send(`This is the profile for: ${req.params.id}`)
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT}`)
})