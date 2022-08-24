  module.exports = (sequelize, DataTypes) => {
    let alias = "users";
    let cols={
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          first_name: {
            type: DataTypes.STRING
          },
          last_name: {
            type: DataTypes.TEXT
          },
          user_name: {
            type: DataTypes.STRING
          },
          email : {
            type: DataTypes.STRING
          },
          passwd : {
            type: DataTypes.STRING
          },
          avatar: {
            type: Sequelize.INTEGER,
            allowNull:true,
            references:{
              model:'images',
              key:'id'}
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
