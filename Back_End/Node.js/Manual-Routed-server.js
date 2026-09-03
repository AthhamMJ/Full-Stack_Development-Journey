const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Welcome to the home page');
    }
    else if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('This is the About page');
    }
    else if(req.url === '/api/students' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify([
            {id: 1, name: 'Athham', age: 20},
            {id: 2, name: 'Max', age: 20}
        ]));
    }
    else{
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('404 Not Found');
    }
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})