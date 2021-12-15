const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();

router.get('/products/:category', shopController.getProducts);
router.get('/product/:id', shopController.GetProductDetails);
router.get('/farmers', shopController.getFarmers);
router.get('/farmers/:id', shopController.getFarmerDetails);
router.put('/cart', shopController.postCart);

module.exports = router;
