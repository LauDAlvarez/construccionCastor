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

function fileFilter (req, file, cb) {
    const validFormat = [ 'image/jpeg', 'image/jpg' ]
    // La función debe llamar a `cb` usando una variable del tipo boolean
    // para indicar si el archivo debería ser aceptado o no
    if(validFormat.includes(file.mimetype) ){
      // Para aceptar el archivo es necesario pasar `true`, de la siguiente forma:
        cb(null, true)
    }else{
      // Para rechazar el archivo es necesario pasar `false`, de la siguiente forma:
        cb(null, false)
    }
}

var upload = multer({ storage: storage, fileFilter: fileFilter})

//BUSCADOR
router.get('/search', productsControllers.search);

// Ruta verProuctos
router.get('/', productsControllers.index)

// Obtener producto
router.get('/products/:id', productsControllers.detail); 

// Crear Producto
router.get('/create', productsControllers.create) 
router.post('/createImg', upload.single('nombreImagen') , productsControllers.store)  

// Modificar Producto
router.get('/:id/edit', productsControllers.edit) 
router.put('/:id', productsControllers.update) 

// DELETE
router.get('/delete/:id', productsControllers.delete);
router.delete('/delete/:id', productsControllers.destroy)


module.exports = router;