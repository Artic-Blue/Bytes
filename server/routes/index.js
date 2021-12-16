const express = require('express');
const shopRouter = require('./shop');
const trackerRouter = require('./tracker');
const authRouter = require('./auth');
const cartRouter = require('./cart');

const router = express.Router();

router.use('/cart', cartRouter);
router.use('/auth', authRouter);
router.use('/shop', shopRouter);
router.use('/tracker', trackerRouter);

module.exports = router;
