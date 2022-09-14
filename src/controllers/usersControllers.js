const fs = require('fs');
const path = require('path');
const { validationResult }  = require('express-validator');
const db = require('../database/models');
const { use } = require('../routes/usersRoutes');
const User = db.User
const Product = db.Product

const usersControllers = {
    loginMain: (req, res) => {
            res.render('users/login');
    },
    loginEnter: async (req, res)=> {
        try {
            const [user, products, userProduct] = await Promise.all([
                User.findOne({      
                    where:{
                        email: req.body.email,
                        password: req.body.password
                    }
                }),
                Product.findAll(),
                UserProduct.findAll(),
            ]);

            res.rendirect('users/indexUser', {user , products, userProduct})
        } catch (error) {
            console.log({ error });
        }
    },
    registerOff: async (req, res)=> {
        res.render('users/register')
    },
    registerOn: async (req, res)=>{
        try {
            const [user, products] = await Promise.all([
                User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: req.bode.password,
                    // photo: req.body.photo,
                    category_id: 1,
                    logic_delete: 1,
                }),
                Product.findAll(),
                
            ]);

            

            res.rendirect('users/indexUser', {user , products})
        } catch (error) {
            console.log(error);
        }
    },
    delete: (req, res)=>{
        
    },
    destroy: (req, res)=>{

    }
}

module.exports = usersControllers;