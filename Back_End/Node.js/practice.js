const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Request recieved: ${req.method} ${req.url}`);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Sir, Welcome to your space');
});

server.listen(3000, () => {
    console.log(`Server is Running at http://localhost:3000`);
})