const express = require('express');
const router = express.Router();
const apiUserControllers = require('../../controllers/api/apiUserControllers');

router.get('/', apiUserControllers.list);
router.get('/detail/:id', apiUserControllers.detail);


module.exports = router;