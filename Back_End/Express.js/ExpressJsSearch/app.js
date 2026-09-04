const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello Athham");
});

app.get("/search", (req, res) => {
    const { q, cat } = req.query;
    res.send(`Query: ${q}, Category: ${cat}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});