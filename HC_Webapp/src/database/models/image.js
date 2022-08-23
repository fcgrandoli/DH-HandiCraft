/* module.exports = (sequelize, DataTypes) => {
    let alias = "images";
    let cols = {
        id:{
            allowNull: false,
            autoIncrement:true,
            primaryKey:true,
            type: sequelize.INTEGER,
          },
          path: {
            type:  sequelize.TEXT
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


} */