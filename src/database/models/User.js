

module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password : {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        photo: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        category_id: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        logic_delete: {
            type: dataTypes.TINYINT(4),
            allowNull: false
        },
    };
    let config = {
        tableName:"users",
        timestamps: false,
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