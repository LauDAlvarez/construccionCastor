const db = require('../../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const { Op } = require('sequelize');

const apiUserControllers = {
    'list': (req, res) => {
        Product
            .findAll()
            .then(products => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/v1/products'
                    },
                    data: products
                });
            });
    },
    'detail': (req, res) => {
        Product
            .findByPk(req.params.id)
            .then(product => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'api/v1/products/detail/id'
                    },
                    data: product
                });
            });
    },
    'create': (req, res) => {
        Product
            .create(
                {
                    name: req.body.name,
                    brand: req.body.brand,
                    description: req.body.description,
                    photo: picture,
                    stock: 500,
                    price: req.body.price,
                    discount: req.body.discount,
                    created_at: Date.now(),
                    updated_at: '',
                    category_id: '1',
                    logic_delete: 1
                }
            )
            .then((product) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'api/v1/products/create'
                    },
                    data: product
                })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ mensaje: 'Error de conexion' })
            });
    },
    'delete': (req, res) => {
        let productId = req.params.id;
        Product
            .destroy({
                where: {
                    id: productId
                },
                force: true
            })
            .then((product) => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'api/v1/products/delete/id'
                    },
                    data: product
                })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ mensaje: 'Error de conexion' })
            })
    },
    'search': (req, res) => {
        Product
            .findAll({
                where: {
                    name: { [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then((product) => {
                if (product.length > 0) {
                    return res.status(200).json(product);
                } else {
                    return res.status(200).json('No hay productos que coincidan con tu busqueda!');
                }
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ mensaje: 'Error de conexion' })
            })
    }
}

module.exports = apiUserControllers;