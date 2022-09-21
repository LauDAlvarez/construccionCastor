const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const createUser = require('../middlewares/createUser');
const { logginValidation } = require('../middlewares/userValidation');
const { registerValidation } = require('../middlewares/userValidation');


// LOGGING
router.get('/loggin', usersControllers.loginMain)
router.post('/loggin/checked', logginValidation , usersControllers.loginEnter)
// REGISTER
router.get('/registerOff', usersControllers.registerOff);
router.post('/registerOn', registerValidation , usersControllers.registerOn);
// DELETE
router.get('/delete/:id', usersControllers.delete);
router.delete('/delete/:id', usersControllers.destroy)

module.exports = router;
