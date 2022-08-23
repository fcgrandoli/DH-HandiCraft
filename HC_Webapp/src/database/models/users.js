  module.exports = (sequelize, DataTypes) => {
    let alias = "users";
    let cols={
        id:{
            allowNull: false,
            autoIncrement: true,
           primaryKey : true,
            type: DataTypes.INTEGER
        },
        username: {
            type:DataTypes.STRING
        },
        password: {
            type: DataTypes.TEXT
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const User = sequelize.define(alias, cols, config);
    User.associate = function (models){
        User.belongsTo(models.image,{ 
            as: "avatar",
            foreignKey: "avatar_id"
        })
    }
    return User;
} 
