module.exports = (sequelize, dataTypes) => {
    let alias = 'Product_Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name_category: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName:"product_category",
        timestamps: false,
    }
    const Product_Category = sequelize.define(alias, cols, config); 

    Product_Category.associate = (models)=>{
        Product_Category.hasMany( models.Product, {
            foreignKey:'id',
            as:'productCategory'
        })
    }

    return Product_Category;
};