// Basic Server

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome to Express');
// })

// const port = 3000;
// app.listen(port,() =>{
//     console.log(`Server is running on http://localhost:${port}`);
// })


// Server with routing

// const express = require('express');
// const app = express();
// const port = 8080;

// // Respond to GET request on the root route
// app.get('/', (req, res) => {
//   res.send('GET request to the homepage');
// });

// Respond to POST request on the root route
// app.post('/', (req, res) => {
//   res.send('POST request to the homepage');
// });

// // Respond to GET request on the /about route
// app.get('/about', (req, res) => {
//   res.send('About page');
// });

// // Catch all other routes
// app.all('*', (req, res) => {
//   res.status(404).send('404 - Page not found');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


// Practice

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send(`Welcome to the Express.js`)
// });

// app.get('/about', (req, res) => {
//   res.send(`Welcome to the About Page`)
// });

// app.all('*', (req, res) => {
//   res.status(404).send('404-page not found')
// });


// const port = 5173;

// app.listen(port, () => {
//   console.log(`The Server is running on http://localhost:${port}`)
// })
