module.exports = (sequelize, DataTypes) => {
    let alias = "saleDetail";
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
  
    return saleDetail;
} 
