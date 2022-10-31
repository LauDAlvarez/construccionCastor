module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(5,2).UNSIGNED,
            allowNull: false
        },
        views:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        sales:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: true
        },
        logic_delete: {
            type: dataTypes.TINYINT(4).UNSIGNED,
            allowNull: false
        },
    };
    let config = {
        tableName:"products",
        timestamps: false,
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = (models)=>{
        Product.belongsToMany(models.User, {
            as:"user",
            through:"user_x_product",
            foreignKey:"product_id",
            otherKey:"user_id"
        })
        Product.belongsTo( models.Product_Category, {
            foreignKey:'id',
            as:'productCategory'
        })
    }

    return Product;
};