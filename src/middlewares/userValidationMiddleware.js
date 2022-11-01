const { check } = require('express-validator');
const path = require('path');


const loginValidation = [
    check("email").notEmpty().withMessage("Por favor, complete con su email").bail().isEmail().withMessage("Por favor, ingrese un formato de email válido"),
    check("password").notEmpty().withMessage("Por favor, complete con su contraseña").bail().isStrongPassword().withMessage("La contraseña debe tener al menos 8 caracteres y como mínimo contener una minúscula, una mayúscula, un número y un símbolo"),
]

const registerValidation = [
    check("first_name").notEmpty().withMessage("Por favor, complete con su nombre").bail().isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres").bail().isLength({ max: 15 }).withMessage("El nombre debe tener un máximo de 15 caracteres"),
    check("last_name").notEmpty().withMessage("Por favor, complete con su apellido").bail().isLength({ min: 3 }).withMessage("El apellido debe tener al menos 3 caracteres").bail().isLength({ max: 15 }).withMessage("El apellido debe tener un máximo de 15 caracteres"),
    check("email").notEmpty().withMessage("Por favor, complete con su email").bail().isEmail().withMessage("Por favor, ingrese un formato de email válido"),
    check("password").notEmpty().withMessage("Por favor, complete con su contraseña").bail().isStrongPassword().withMessage("La contraseña debe tener al menos 8 caracteres y como mínimo contener una minúscula, una mayúscula, un número y un símbolo"),
    check("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitido son: ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })

]

module.exports = { loginValidation, registerValidation };