const db = require('../database/models');
const User = db.User;



const usuario = [];
User.findOne({
    where: {
        email: 'hernan@gmail.com'
    }
}).then((userData) => {
    usuario.push(userData)
})

console.log(usuario);