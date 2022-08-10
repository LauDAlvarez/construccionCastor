const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    vistaIndex: (req,res) => {
        res.render('products/productos', {products});
    },
    // Create - Form to create
	create: (req, res) => {
		res.render('products/createProduct');
	},
    // Create -  Method to store
	store: (req, res) => {
        const nuevoProducto = req.body;
		
		console.log(nuevoProducto)
		nuevoProducto.id = Date.now();

		if(req.file){
			nuevoProducto.nombreImagen = req.file.filename;
		}else{
			nuevoProducto.nombreImagen = "default-image.png";
		}

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/', { products })
	},
	detail: (req, res) => {
		const idProduc = req.params.id;

		const product = products.find( (elemento) => { 
			return elemento.id == idProduc 
		} );
		console.log(product)
		res.render('products/productDetail',{ product: product }  );//renderiza el elemento que se encuentra!!
	}
}

module.exports = controlador;