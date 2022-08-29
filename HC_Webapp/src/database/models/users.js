  module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols={
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        first_name: {
          type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.TEXT
        },
        user_name: {
          type: DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING
        },
        passwd: {
          type: DataTypes.STRING
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        avatar: {
          type: DataTypes.TEXT,
          allowNull:true
        },
        loggedIn: {
          type: DataTypes.BOOLEAN
        }

    };
    let config = {
        timestamps:false,
        deletedAt: false
    };

    const User = sequelize.define(alias, cols, config);
  
    return User;
} 