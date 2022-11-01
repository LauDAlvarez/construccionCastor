const express = require('express');
const router = express.Router();

//Controller
const userControllers = require('../controllers/userControllers');

//Middleware
const uploadFile = require('../middlewares/userMulterMiddleware');

const { loginValidation } = require('../middlewares/userValidationMiddleware');
const { registerValidation } = require('../middlewares/userValidationMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// LOGGING
router.get('/login', guestMiddleware, userControllers.login);
router.post('/logined', loginValidation, userControllers.loginProcess);

// REGISTER
router.get('/register', guestMiddleware, userControllers.register);
router.post('/registered', uploadFile.single('avatar'), registerValidation, userControllers.registered);

// DELETE
// router.get('/delete/:id', usersControllers.delete);
// router.delete('/delete/:id', usersControllers.destroy)

// Perfil usuario
router.get('/profile', authMiddleware, userControllers.profile);

//Logout
router.get('/logout', userControllers.logout);


module.exports = router;