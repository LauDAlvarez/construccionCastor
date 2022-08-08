const fs = require('fs')
function createUser(req, res, next){
    const userCrate = JSON.stringify(req.body)
    fs.appendFileSync('userDataBase', userCrate);

    next();
}

module.exports = createUser;