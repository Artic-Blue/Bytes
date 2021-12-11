const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/example', trackerController.exampleGet);

router.get('/list', trackerController.getList);

router.post('/postListItem', trackerController.postListItem);

module.exports = router;
