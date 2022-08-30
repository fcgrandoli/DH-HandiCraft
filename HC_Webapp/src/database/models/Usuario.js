  module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
    let cols={
        id: {
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

    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Usuario = sequelize.define(alias, cols, config);
  
    return Usuario;
} 
