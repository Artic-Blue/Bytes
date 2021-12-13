const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();

router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.GetProductDetails);
router.put('/cart', shopController.postCart);

module.exports = router;
