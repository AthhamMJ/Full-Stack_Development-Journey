const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
if (req.url === '/') {
const filePath = path.join(__dirname, 'public', 'index.html');
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
res.writeHead(500);
res.end('Server Error');
return;
}
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(data);
});
} else {
res.writeHead(404);
res.end('Not Found');
}
});
server.listen(3000, () => console.log('File server running on port 3000'))