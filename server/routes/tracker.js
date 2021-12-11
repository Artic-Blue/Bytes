const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/example', trackerController.exampleGet);

module.exports = router;
