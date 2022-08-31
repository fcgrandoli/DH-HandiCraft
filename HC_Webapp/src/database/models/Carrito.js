module.exports = (sequelize, DataTypes) => {
    let alias = "Carrito";
    let cols={
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          
          idUsuario: {
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

    Carrito.associate= function(models){
      Carrito.hasMany(models.Producto,{
        foreignKey: idProducto,
        as: 'Carrito'
      })

     }
  
    return Carrito;
} 
