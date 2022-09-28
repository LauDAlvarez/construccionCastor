const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const multer = require('multer');
const path = require('path');

const createUser = require('../middlewares/createUser');
const { logginValidation } = require('../middlewares/userValidation');
const { registerValidation } = require('../middlewares/userValidation');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/users');
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})
const uploadFile = multer({ storage })

// LOGGING
router.get('/login', userControllers.login);
router.post('/login/checked', logginValidation , userControllers.loginEnter);
// REGISTER
router.get('/register', userControllers.register);
router.post('/registered', uploadFile.single('avatar'), userControllers.registered);
// DELETE
// router.get('/delete/:id', usersControllers.delete);
// router.delete('/delete/:id', usersControllers.destroy)

// Perfil usuario
router.get('/profile/:userId', userControllers.profile)

module.exports = router;