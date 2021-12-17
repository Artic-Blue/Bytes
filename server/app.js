const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', routes);
app.get('*', (req, res) => res.sendFile(path.resolve('public', 'index.html')));

module.exports = app;
