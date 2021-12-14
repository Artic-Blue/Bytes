const express = require('express');
const cors = require('cors');
const shopRouter = require('./routes/shop');
const trackerRouter = require('./routes/tracker');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');

const app = express();
app.use(cors());

app.use(express.static('public'));
app.use(express.json());

app.use('/cart', cartRouter);
app.use('/auth', authRouter);
app.use('/shop', shopRouter);
app.use('/tracker', trackerRouter);

module.exports = app;
