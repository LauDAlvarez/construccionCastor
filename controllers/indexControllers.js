const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainControllers = {
    index: (req, res) => {
        res.render('index', { products: products })
    },
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'))
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'))
    },

    search: (req, res) => {
        let search = req.query.keywords.toLowerCase();
        const productsFilter = products.filter((elemento) => {
            return elemento.nombre.toLowerCase().includes(search);
        })
        console.log(productsFilter);
        if(productsFilter.length == 0){
            search = "No hay resultado en busqueda"
        }

        res.render('products/results', { productsFilter, search });


    }
}

module.exports = mainControllers;