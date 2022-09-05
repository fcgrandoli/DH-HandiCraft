module.exports = (sequelize, DataTypes) => {
    let alias = "Producto";
    let cols={
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          nombre: {
            allowNull: false,
            type: DataTypes.STRING
          },
         precio: {
            allowNull: false,
            type: DataTypes.DECIMAL
          },
          descripcionLarga: {
            allowNull: false,
            type: DataTypes.STRING
          },
          descripcionCorta: {
            allowNull: false,
            type: DataTypes.STRING
          },
          descuento : {
            allowNull: false,
            type: DataTypes.STRING
          },
          cantidad : {
            allowNull: true,
            type: DataTypes.INTEGER
          },
          urlImagen: {
            type: DataTypes.INTEGER,
            allowNull:false,
            type: DataTypes.STRING
          }
    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Producto = sequelize.define(alias, cols, config);

  /*   Producto.associate= function(models){
      Producto.hasMany(models.ventaDetalle,{
        foreingKey: Producto.id,
        as: 'VentaDetalle'
      })
      Producto.hasMany(models.Carrito,{
        foreignKey: idProducto,
        as: 'Carrito'
      }) */
      return Producto; 
    }
   
    
// } 
