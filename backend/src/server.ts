import express from "express"

import data from "./data/tasks.js"

const app = express()
const PORT = 1234

app.get("/", (req, res) => {
    res.send(data)
})

app.listen(PORT, () => {
    console.log("Server läuft")
})