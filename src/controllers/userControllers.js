const { validationResult } = require('express-validator');
const db = require('../database/models');
const sequelize = db.sequelize;
const User = db.User;
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

// const Product = db.Product
// const comprador = {
//     "name": 'Comprador anonimo',
// }

const userControllers = {
    login: (req, res) => {
        res.render('users/login');
    },


    loginProcess: (req, res) => {
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then((userData) => {
            if (userData) {
                let isOkThePassword = bcrypt.compareSync(req.body.password, userData.password);
                if (isOkThePassword) {
                    delete userData.dataValues.password;
                    req.session.userLogged = userData;
                    if(req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
                    return res.redirect('/users/profile')
                } else {
                    return res.render('users/login', {
                        errors: {
                            email: {
                                msg: 'Las credenciales ingresadas son invalidas, ingresalas nuevamente'
                            }
                        }
                    })
                }
            } else {
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'El email o la contraseña son incorrectos, ingresalos nuevamente'
                        }
                    }
                })
            }
        })
    },


    register: (req, res) => {
        res.render("users/register");
    },

    registered: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            User.findOne({
                where: {
                    email: req.body.email
                }
            }).then((resultado) => {

                if (resultado != null) {
                    return res.render("users/register", {
                        errors: {
                            email: {
                                msg: 'Este email ya se encuentra registrado'
                            }
                        },
                        oldData: req.body
                    });
                } else {
                    let pass = req.body.password;
                    let passCrypt = bcrypt.hashSync(pass, 12);
                    let picture;
                    if (req.file) {
                        picture = req.file.filename;
                    } else {
                        picture = 'userDefault.webp';
                    }
                    User.create({
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: passCrypt,
                        photo: picture,
                        category_id: 1,
                        logic_delete: 1,
                    }).then((user) => {
                        res.redirect('/users/login');
                    });
                }

            });
        }
    },

    profile: (req, res) => {
        // console.log(req.cookies.userEmail);
        res.render('users/profile', {
            user: req.session.userLogged
        });
    },

    softDelete: (req, res) => {

    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
}

module.exports = userControllers;