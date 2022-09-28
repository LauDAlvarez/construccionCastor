const { validationResult }  = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;
const User = db.User;
const { Op } = require("sequelize");

const bcrypt = require('bcryptjs');

const Product = db.Product
const comprador = {
    "name": 'Comprador anonimo',
}

const userControllers = {
    login: (req, res) => {
            res.render('users/login');
    },
    loginEnter: async (req, res)=> {
        try {
            const errors = validationResult(req)
            const [user, products] = await Promise.all([
                User.findOne({      
                    where:{
                        email: req.body.email,
                        password: req.body.password
                    }
                }),
                Product.findAll(),
            ]);


            if(errors.isEmpty()){
                // if(user.category_id == 1){

                    res.render('users/userIndex', {user , products})
                // }else{
                //     res.render('indexUser', { user: comprador , products})
                // }
            }else{
                console.log("USUARIO: "+ user )
                res.render('users/userIndex', {user: comprador, products ,errors});
            }

        } catch (error) {
            console.log({ error });
        }
    },
    register: (req, res)=> {
        res.render("users/register")
    },
    registered: (req, res)=>{
        let pass = req.body.password;
        let passCrypt = bcrypt.hashSync(pass, 12);
        User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: passCrypt,
                photo: 'images/users/userDefault.webp',
                category_id: 1,
                logic_delete: 1,          
        })
        .then((user) => {
            res.redirect('/users/login');
        });
    },
    delete: (req, res)=>{
        
    },
    destroy: (req, res)=>{

    }
}

module.exports = userControllers;