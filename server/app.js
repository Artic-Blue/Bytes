const express = require('express');
const cors = require('cors');
const shopRouter = require('./routes/shop');
const trackerRouter = require('./routes/tracker');

const app = express();
app.use(cors());

app.use(express.static('public'));

app.use('/shop', shopRouter);
app.use('/tracker', trackerRouter);

module.exports = app;
