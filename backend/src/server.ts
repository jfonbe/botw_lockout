import express from "express"
import cors from "cors"

import data from "./data/tasks.js"

const app = express()
const PORT = 1234

app.use(cors())

app.get("/", (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log("Server läuft")
})