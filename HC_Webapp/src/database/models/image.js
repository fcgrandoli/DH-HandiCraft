module.exports = (sequelize, DataTypes) => {
    let alias = "image";
    let cols = {
        name :{
        type: DataTypes.STRING
    }
    }
    let config = {
        timestamps:false,
        deletedAt: false
    };


    const images = sequelize.define(alias,cols,config);
    images.associate = function (models){
        images.hasMany(models.users,{ 
            as: "users",
            foreignKey: "avatar_id"
        })
    }
    return images


}