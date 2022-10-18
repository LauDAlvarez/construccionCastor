const path = require('path');
const db = require('../database/models');
const Sequelize = require('sequelize');
const { where } = require('sequelize');
const { render } = require('ejs');
const Product = require('../database/models/Product');
const { Console } = require('console');
const Op = Sequelize.Op;


const controlador = {
	index: async(req, res) => {
		try{
			const allProduct = await db.Product.findAll()
			const productFilter = []
			allProduct.forEach( product => {
				if(product.logic_delete == 1){
					productFilter.push(product)
				}
			});
			

			res.render('index', {products: productFilter,  notFound: null})
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
	create: async(req, res) => {
		try {
			const category = await db.Product_Category.findAll();

			res.render('products/createProduct', { category: category });
		} catch (error) {
			
		}
	},
    // Create -  Method to store
	store: async (req, res) => {
		try{ 
			let picture;
			if(req.file){
				picture = req.file.filename;
			}else{
				picture = 'default-image.png';
			}
			

			const product  = await db.Product.create({
					name: req.body.name,
					brand: req.body.brand,
					description: req.body.description,
					photo:  picture,
					stock: 500,
					price: req.body.price,
					discount: req.body.discount,
					created_at: Date.now(),
					updated_at:'',
					category_id:'1',
					logic_delete: 1
				})

			console.log(product)

			res.redirect('/') 
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
	delete:async(req, res)=>{
		const product = await db.Product.findOne({
			where:{
				id: req.params.id
			}
		})
		const date = new Date(product.created_at);
		const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
		const fullYear = date.getFullYear();
		product.created_at = `${fullYear}-${month}-${day}`;


		const productDel = await db.Product.update({
			name: req.body.name,
			brand: req.body.brand,
			description: req.body.description,
			photo: req.body.file,
			stock: 500,
			price: req.body.price,
			discount: req.body.discount,
			created_at: product.created_at ,
			updated_at: Date.now(),
			category_id:'1',
			logic_delete: 0
	},
	{
		where:{
			id: req.params.id
		}
	})

	res.redirect('/') 
	},
	list: async(req, res)=>{
		try{
			const category = await db.Product_Category.findAll() 
			const allProduct = await db.Product.findAll({
				include: [{association: 'productCategory'}]
			})
			const productFilter = []
			allProduct.forEach( product => {
				if(product.logic_delete == 1){
					productFilter.push(product)
				}
			});
			
			res.render('products/productos', { products: productFilter, category })
		}catch{

		}
	},
// HICIMOS COPIAR Y PEGAR - HAY REVISAR EL EDIT Y EL UPDATE
//COMO PONER UN CAMPO DEFAULT PARA HACER UN UPDATE ASI NO OCURRE ESTO 'realseDate' y 'photo'?
	edit: async(req, res) => {
		try {
			const category = await db.Product_Category.findAll()
			const product = await db.Product.findOne({
				include: [{association: 'productCategory'}],
				where:{
					id: req.params.id
				}
			})

			res.render('products/editProduct', {product, category});
		} catch (error) {
			
		}
	},
	// Update - Method to update
	update:  async(req, res) => {
		
		const product = await db.Product.findOne({
			where:{
				id: req.params.id
			}
		})
		const date = new Date(product.created_at);
		const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
		const fullYear = date.getFullYear();
		const data  = `${fullYear}-${month}-${day}T00:00:00.000Z`;
		console.log(data)

		try {
			const productUpd = await db.Product.update({
					name: req.body.name,
					brand: req.body.brand,
					description: req.body.description,
					photo: req.file.filename,
					stock: req.body.stock,
					price: req.body.price,
					discount: req.body.discount,
					created_at: data ,
					updated_at: Date.now(),
					category_id: req.body.category_id,
					logic_delete: 1
			},
			{
				where:{
					id: req.params.id
				}
			})
			console.log(productUpd)

			res.redirect('/') 
		} catch (error) {
			
		}
	},
	categoryFilter: async(req, res)=>{
		try {
			const category = await db.Product_Category.findAll();
			let idCat;
			const categoryFilter = [];
			category.forEach( cat =>{
				if(cat.name_category == req.params.category){
					idCat = cat.id;
				}else{
					categoryFilter.push(cat);
				}
				
			})
			const productFilter = await db.Product.findAll({
				where:{
					category_id: idCat
				}
			});



			res.render('products/productos', { products: productFilter, category: categoryFilter })
		} catch (error) {
			
		}
	}
}


module.exports = controlador;