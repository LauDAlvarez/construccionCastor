const fs = require('fs');
const path = require('path');
const { validationResult }  = require('express-validator');
const productsFilePath = path.join(__dirname, '../data/userDataBase.json');
const user = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const usersControllers = {
    loginMain: (req, res) => {
            res.render('users/login');
    },
    register: (req, res) => {
        const validations = validationResult(req);   
        const usuario = req.body;

        console.log(usuario)

        if(!validations.isEmpty()){
            return res.render('users/register', {errors: validations.errors});
        }      
         // USERdata validacion de que no se encuentre en el base
        user.forEach(elemento => {
            if( (elemento.nombre == usuario.nombre)&&(elemento.email == usuario.email) ){
                res.send('El usuario '+ elemento.nombre +' ya existe!')
            }else{
                res.render('users/userIndex', {user: elemento})
            }
        });  
    },
    registerPass:(req, res)=>{
        const usuario = req.body;
        res.render('user/userIndex');
    }
}

module.exports = usersControllers;