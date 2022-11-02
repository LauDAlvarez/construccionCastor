function userCat2Middleware(req, res, next) {
    console.log(req.session.userLogged)
    if(req.session.userLogged && req.session.userLogged.category_id == 2) {
        return res.redirect('/');
    }
    next();
}

module.exports = userCat2Middleware;