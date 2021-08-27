const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first server</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from my first NodeJS server!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
