const fs = require('fs')
function createUser(req, res, next){
    const userCreate = JSON.stringify(req.body)
    fs.appendFileSync('userDataBase', userCreate);

    next();
}

module.exports = createUser;