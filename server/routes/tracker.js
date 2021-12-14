const express = require('express');
const trackerController = require('../controllers/trackerController');

const router = express.Router();

router.get('/example', trackerController.exampleGet);

router.get('/getList/:renderAmount/:user', trackerController.getList);

router.post('/postListItem', trackerController.postListItem);

module.exports = router;
