const e = require("express");
const { Model } = require("sequelize/types");
const { FOREIGNKEYS } = require("sequelize/types/query-types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        password : {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        photo: {
            type: dataTypes.VARCHAR(500),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        logic_delete: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    let config = {
        tableName:"user",
        timestamps: true,
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = (models)=>{
        User.belongsToMany(models.Product, {
            as:"user",
            through:"user_x_product",
            foreignKey:"user_id",
            otherKey:"product_id"
        })
    }
    return User;
}