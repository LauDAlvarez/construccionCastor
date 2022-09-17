const path = require('path');
const db = require('../database/models');
const Sequelize = require('sequelize');
const { where } = require('sequelize');
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
	store: async (req, res) => {
		try{
			const product = await db.Product.create({
				name: req.body.name,
				price: req.body.price,
				description: req.body.description,
				discount: req.body.discount,
				photo: '/images/default-image.png',
				stock: 500,
				logic_delete: 1
			})
			console.log(product)

			res.redirect('index')
		}catch{

		}
	},
	detail: async (req, res) => {
		try{
			const product = await db.Product.findOne({
				where:{
					id: req.params.id
				}
			});

			console.log(product)
			res.render('products/productDetail',{ product: product }  ); //renderiza el elemento que se encuentra!!
		}catch{

		}
	},
	delete: (req, res)=>{
        res.render('')
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