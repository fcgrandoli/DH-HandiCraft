module.exports = (sequelize, DataTypes) => {
  let alias = 'product';
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    descShort: {
      type: DataTypes.TEXT,
    },
    descLarge: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    collection: {
      type: DataTypes.STRING,
    },
  };

  let config = {
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = ({ image }) => {
    Product.belongsToMany(image, {
      through: 'imagesProducts',
      foreignKey: 'product',
    });
  };
  return Product;
};
