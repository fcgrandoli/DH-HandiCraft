  module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
    let cols={
        id: {
<<<<<<< HEAD:HC_Webapp/src/database/models/Usuario.js
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        nombre: {
          type: DataTypes.STRING
        },
        apellido: {
          type: DataTypes.TEXT
        },
        nombreUsuario: {
          type: DataTypes.STRING
        },
        contraseña: {
          type: DataTypes.STRING
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        avatar: {
          type: DataTypes.TEXT,
          allowNull:true
        }
=======
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
>>>>>>> parent of 79c276e (isAdmn de tabla users actualizado):HC_Webapp/src/database/models/users.js

    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Usuario = sequelize.define(alias, cols, config);
  
    return Usuario;
} 
