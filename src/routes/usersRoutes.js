const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const createUser = require('../middlewares/createUser');
const registerValidation = require('../middlewares/userValidation');


router.get('/login',  usersControllers.loginMain);
router.get('/register', registerValidation ,  usersControllers.register);
router.post('/register', createUser , usersControllers.registerPass)

module.exports = router;
