module.exports = (sequelize, DataTypes) => {
    let alias = "Client";
    let cols={
        idCliente: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          first_name: {
            type: DataTypes.STRING
          },
          last_name: {
            type: DataTypes.STRING
          },
          idUsuario: {
            type: DataTypes.INTEGER
          },
          cuit : {
            type: DataTypes.INTEGER
          },
          dni : {
            type: DataTypes.INTEGER
          }
         
    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Client = sequelize.define(alias, cols, config);
   
    
    return Client;
} 
