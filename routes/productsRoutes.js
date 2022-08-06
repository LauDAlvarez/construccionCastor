const express = require('express');
const router = express.Router();
const multer = require('multer');

const productsControllers = require('../controllers/productsControllers');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage })

// Ruta verProuctos
router.get('/', productsControllers.vistaIndex)   



module.exports = router;