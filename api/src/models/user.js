const { DataTypes, Model } = require ("sequelize");
const sequelize = require ("sequelize")
const sqlConfig = require ("../conection/sequelizeConetion");
const Serie = require("./serie");

const User = sqlConfig.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['id'],
      },
      {
        unique: true,
        fields: ['email'],
      },
    ],
  });
  
  User.hasMany(Serie, {
    foreignKey: 'createdBy',
  });

module.exports = User