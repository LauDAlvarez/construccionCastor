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
	},


// HICIMOS COPIAR Y PEGAR - HAY REVISAR EL EDIT Y EL UPDATE

	edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const idProduc = req.params.id;
		const productEdit = products.find( item => item.id == idProduc )
		res.render('products/editProduct', {productEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const idProduc = req.params.id;
		const productEdit = req.body;


		products.forEach( product => {

			if(idProduc == product.id){
				product.name = productEdit.name;
				product.price = productEdit.price;
				product.discount = productEdit.discount;
				product.category = productEdit.category;
				product.description = productEdit.description;
	
				if(req.file){
					product.image = req.file.filename;
				}
			}
// 
}

module.exports = controlador;