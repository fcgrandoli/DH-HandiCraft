module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols={
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            allowNull: false,
            type: DataTypes.STRING
          },
         price: {
            allowNull: false,
            type: DataTypes.DECIMAL
          },
          descl: {
            allowNull: false,
            type: DataTypes.STRING
          },
          descs : {
            allowNull: false,
            type: DataTypes.STRING
          },
          cant : {
            allowNull: true,
            type: DataTypes.INTEGER
          },
          avatar: {
            type: Sequelize.INTEGER,
            allowNull:false,
            references:{
              model:'images',
              key:'id'}
          }
    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const Product = sequelize.define(alias, cols, config);
   
    return Product;
} 
