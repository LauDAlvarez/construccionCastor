const db = require('../../database/models');
const sequelize = db.sequelize;
const User = db.User;
const { Op } = require('sequelize');

const apiUserControllers = {
    'list': (req, res) => {
        User
            .findAll()
            .then(users => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/v1/users'
                    },
                    data: users
                });
            });
    },
    'detail': (req, res) => {
        User
            .findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'api/v1/users/detail/id'
                    },
                    data: user
                });
            });
    }
}

module.exports = apiUserControllers;