import express from "express";
import dotEnv from "dotenv";

dotEnv.config();

const PORT = process.env.PORT;
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request received`);
    console.log(`Path: ${req.path}`);
    console.log(`Time: ${new Date()}`);
    next();
})

app.get('/', (req, res) => {
    res.send("<h1>Hi, Bro Life is good, huh ?</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>Life is Cooking you :( Isn't it ? ?</h1>")
})

app.use((res, req) => {
    res.status(404).send("<h1>Page not Found</h1>")
})

app.listen(PORT, () =>{
    console.log(`Server is Running in http://localhost:${PORT}`);
})