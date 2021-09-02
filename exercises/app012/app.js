const http = require('http');
const path = require('path');

const express = require('express');

const routes = require('./routes/admin');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(3000);
