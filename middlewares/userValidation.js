const { body }  = require('express-validator');


const registerValidation = [
    body("nombre").notEmpty().withMessage("Por favor complete con su nombre").bail().isLength( {min: 3} ).withMessage("El Nombre debe tener al menos 3 caracteres").bail().isLength( {max: 15} ).withMessage("El Nombre debe tener maximo 15 caracteres"),
    body("apellido").notEmpty().withMessage("Por favor complete con su apellido").bail().isLength( {min: 3} ).withMessage("El Nombre debe tener al menos 3 caracteres").bail().isLength( {max: 15} ).withMessage("El Nombre debe tener maximo 15 caracteres"),
    body("email").notEmpty().withMessage("Por favor complete con su email").bail().isEmail().withMessage("Por favor ingrese un email válido"),
    body("contrasena").notEmpty().withMessage("Por favor complete con su contraseña").bail().isLength( {min: 8} ).withMessage("El Nombre debe tener al menos 3 caracteres").bail().isLength( {max: 15} ).withMessage("El Nombre debe tener maximo 15 caracteres"),
    body("repite-contrasena").notEmpty().withMessage("Por favor complete con su contraseña").bail().isLength( {min: 8} ).withMessage("El Nombre debe tener al menos 3 caracteres").bail().isLength( {max: 15} ).withMessage("El Nombre debe tener maximo 15 caracteres"),
    
]

module.exports = registerValidation;