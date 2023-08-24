const { DataTypes } = require ("sequelize");
const sqlConfig = require ("../conection/sequelizeConetion")

const Serie = sqlConfig.define('Serie',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  serieName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  }
})

module.exports = Serie