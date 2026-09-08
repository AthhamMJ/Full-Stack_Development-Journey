import express from "express";
import dotEnv from "dotenv";
import path from "node:path";

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    console.log(`Method: ${req.method}`);
    console.log(`Headers: ${req.headers}`);
    console.log(`Path: ${req.path}`)
    console.log(new Date())
    next();
})

app.get('/', (req,res) => {
    console.log(`URL : ${req.path}`)
    res.send("<h1>Yo Man !</h1>")
});

app.get('/about', (req,res) => {
    console.log(`URL : ${req.path}`)
    res.send("<h1>You're Cooked :( aren't you ?</h1>")
});

app.use((req, res) => {
    res.status(404).send("<h1>page not found</h1>")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});