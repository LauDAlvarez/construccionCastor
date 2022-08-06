const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/indexControllers');

router.get('/', mainControllers.index);
router.get('/search', mainControllers.search);

module.exports = router;