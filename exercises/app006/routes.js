const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>First Exercise</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Welcome!</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username)
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>User 1</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}

module.exports = reqHandler;
