const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const createUser = require('../middlewares/createUser');
const { logginValidation } = require('../middlewares/userValidation');
const { registerValidation } = require('../middlewares/userValidation');


// LOGGING
router.get('/login', userControllers.login)
router.post('/login/checked', logginValidation , userControllers.loginEnter)
// REGISTER
router.get('/register', userControllers.register);
router.post('/registered', registerValidation , userControllers.registered);
// DELETE
// router.get('/delete/:id', usersControllers.delete);
// router.delete('/delete/:id', usersControllers.destroy)

module.exports = router;