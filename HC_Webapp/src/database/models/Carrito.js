module.exports = (sequelize, DataTypes) => {
    let alias = "Carrito";
    let cols={
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          
          idCliente: {
            type: DataTypes.TEXT
          },
          idProducto: {
            type: DataTypes.INTEGER
          },
         cantidad: {
            type: DataTypes.INTEGER
          }
    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Carrito = sequelize.define(alias, cols, config);
  
    return Carrito;
} 
