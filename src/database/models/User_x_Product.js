module.exports = (sequelize, dataTypes) => {
    let alias = 'User_x_Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
},
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
        },
        comments: {
            type: dataTypes.STRING(1000),
            allowNull: false
        },
        comment_date: {
            type: dataTypes.DATE,
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
        saleCode: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        tableName:"user_x_product",
        timestamps: false,
    }
    const   User_x_Product = sequelize.define(alias, cols, config); 

    User_x_Product.associate = (models)=>{
        
    }

    return User_x_Product;
};