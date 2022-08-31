  module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
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
            type: DataTypes.INTEGER,
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

    const Usuario = sequelize.define(alias, cols, config);
  
    return Usuario;
} 
