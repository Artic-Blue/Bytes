const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();

router.get('/example', shopController.exampleGet);
router.get('/products', shopController.exampleGet);
router.get('/products/:id', shopController.GetProductDetails);

module.exports = router;
