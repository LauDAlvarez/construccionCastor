const { Model } = require("sequelize/types");
const { FOREIGNKEYS } = require("sequelize/types/query-types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: dataTypes.VARCHAR(500),
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(5,2),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
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
        tableName:"product",
        timestamps: true,
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = (models)=>{
        Product.belongsToMany(models.User, {
            as:"user",
            through:"user_x_product",
            foreignKey:"product_id",
            otherKey:"user_id"
        })
    }

    return Product;
};