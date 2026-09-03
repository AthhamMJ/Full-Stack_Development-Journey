const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(`Request recived:  ${req.method} ${req.url}`);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Athham Welcome to iVault');
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})
