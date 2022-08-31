module.exports = (sequelize, DataTypes) => {
    let alias = "VentaDetalle";
    let cols={
        idVenta: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
         idProducto: {
            type: DataTypes.DATE
          },
          cantidad: {
            type: DataTypes.TEXT
          }
    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const saleDetail = sequelize.define(alias, cols, config);
  
    saleDetail.associate= function(models){
      saleDetail.hasMany(models.Producto,{
        foreignKey: idProducto,
        as: 'Producto'
      })

    }
   
    return saleDetail;
} 
