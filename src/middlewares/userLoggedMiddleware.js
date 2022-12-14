//Middleware de aplicación
const db = require('../database/models');
const User = db.User;

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    if(emailInCookie != undefined) {
        User
        .findOne({
            where: {
                email: emailInCookie
            }
        })
        .then((userFromCookie) => {
            console.log(userFromCookie)
            req.session.userLogged = userFromCookie
            if (req.session.userLogged) {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
                }
        })
    }
    console.log(emailInCookie)

    next();
}

module.exports = userLoggedMiddleware;