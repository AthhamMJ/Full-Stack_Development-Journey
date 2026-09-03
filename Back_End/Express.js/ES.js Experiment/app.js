import express from "express"

const app = express()
const port = 8080

app.get('/driver/:dname/team/:teamId', (req, res) => {
    res.send(`TeamID ${req.params.teamId}, Driver ${req.params.dname}`)
})

app.listen(port, () => {
    console.log(`The Server is running on http://localhost:${port}`)
})