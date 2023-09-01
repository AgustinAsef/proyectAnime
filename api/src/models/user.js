const { DataTypes, Model } = require ("sequelize");
const sequelize = require ("sequelize")
const sqlConfig = require ("../conection/sequelizeConetion");
const Serie = require("./serie");

const user = sqlConfig.define("user", {
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
    modelName: 'user',
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
  
  user.hasMany(Serie, {
    foreignKey: 'createdBy',
  });

module.exports = user