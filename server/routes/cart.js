const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/cart', cartController.getCart);

module.exports = router;
