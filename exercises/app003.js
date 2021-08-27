const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first form(?)</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('<body>');
        res.write('</html>');
        return res.end();
    }
    res.write('<html>');
    res.write('<head><title>My first form(?)</title></head>');
    res.write('<body><h1>Thank you!</h1></body>');
    res.write('</html>');
});

server.listen(3000);
