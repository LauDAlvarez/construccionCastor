const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const createUser = require('../middlewares/createUser');
const registerValidation = require('../middlewares/userValidation');


// LOGGING
router.get('/loggin', usersControllers.loginMain)
router.post('/loggin/checked', usersControllers.loginMain)
// REGISTER
router.get('/registerOff', usersControllers.registerOff);
router.post('/registerOn', usersControllers.registerOn);
// DELETE
router.get('/delete/:id', usersControllers.delete);
router.update('/delete/:id', usersControllers.destroy)

module.exports = router;
