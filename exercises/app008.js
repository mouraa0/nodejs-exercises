const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<ul><li>User 1</li></ul>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Third assignment, first part</h1>');
});

app.listen(3000);
