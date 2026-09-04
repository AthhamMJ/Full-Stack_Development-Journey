const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory
app.use(express.static('public'));

// POST route that uses JSON middleware
app.post('/api/users', (req, res) => {
  // req.body contains the parsed JSON data
  console.log(req.body);
  res.status(201).json({ message: 'User created', user: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
