const express = require('express');
const router = express.Router();
const apiProductControllers = require('../../controllers/api/apiProductControllers');

router.get('/', apiProductControllers.list);
router.get('/detail/:id', apiProductControllers.detail);
router.get('/search', apiProductControllers.search);
router.post('/create', apiProductControllers.create);
router.delete('/delete/:id', apiProductControllers.delete);

module.exports = router;