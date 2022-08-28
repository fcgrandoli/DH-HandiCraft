module.exports = (sequelize, DataTypes) => {
    let alias = "Sale";
    let cols={
        idVenta: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
         fecha: {
            type: DataTypes.DATE
          },
          idCliente: {
            type: DataTypes.TEXT
          }
    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Sale = sequelize.define(alias, cols, config);
  
    return Sale;
} 
