const path = require('path');
const db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const controlador = {
	index: async(req, res) => {
		try{
			const data = await db.Product.findAll()
			res.render('index', {products:data,  notFound: null})
		}catch{

		}
    },
    search:	(req, res) => {
		const notFound = 'No hay productos que coincidan con tu busqueda!'
		const nameProduct = req.query.keywords
		db.Product
			.findAll({
				where:{
					name: {[Op.like] : "%" + nameProduct + "%"}
				}
			})
			.then(data=> {
				console.log(data)
				if(data == []){
					res.render('index', {notFound: notFound})
				}

				res.render('index', {products: data, notFound: nameProduct}) 
			})
			
    },
    // Create - Form to create
	create: (req, res) => {
		res.render('products/createProduct');
	},
    // Create -  Method to store
	store: (req, res) => {

	},
	detail: (req, res) => {
		const idProduc = req.params.id;

		const product = products.find( (elemento) => { 
			return elemento.id == idProduc 
		} );
		console.log(product)
		res.render('products/productDetail',{ product: product }  );//renderiza el elemento que se encuentra!!
	},
	delete: (req, res)=>{
        
    },
    destroy: (req, res)=>{

    },
// HICIMOS COPIAR Y PEGAR - HAY REVISAR EL EDIT Y EL UPDATE

	edit: (req, res) => {
		
	},
	// Update - Method to update
	update: (req, res) => {
		
	}
}


module.exports = controlador;