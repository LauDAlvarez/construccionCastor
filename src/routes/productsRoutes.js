const express = require('express');
const router = express.Router();
const multer = require('multer');

const productsControllers = require('../controllers/productsControllers');
const userCat2Middleware = require('../middlewares/userCat2Middleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

function fileFilter (req, file, cb) {
    const validFormat = [ 'image/jpeg', 'image/jpg', 'image/webp' ]
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

// Ruta verProductos
router.get('/', productsControllers.index)
router.get('/productList/:category', productsControllers.categoryFilter)
router.get('/productList', productsControllers.list)

// Obtener producto
router.get('/products/:id', productsControllers.detail); 

// Crear Producto
router.get('/create', productsControllers.create) 
router.post('/createSuccessful', upload.single('photo') , productsControllers.store)  

// Modificar Producto
router.get('/:id/edit', productsControllers.edit) 
router.put('/:id',  upload.single('photo') ,productsControllers.update) 

// DELETE
router.put('/delete/:id', productsControllers.delete)

// Carrito
router.get('/cart', userCat2Middleware, productsControllers.cart)

// Ofertas
router.get('/sales', productsControllers.sales)

// Crear categorias
router.get('/createCategory', productsControllers.createCategory)
router.post('/createCategorySuccessful', productsControllers.createCategorySuccessful)


module.exports = router;