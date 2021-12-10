const express = require('express');
const shopController = require('../controllers/shopController');

const router = express.Router();

router.get('/example', shopController.exampleGet);

module.exports = router;
