const { DataTypes } = require ("sequelize");
const sqlConfig = require ("../conection/sequelizeConetion")


const Cap = sqlConfig.define('Cap', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  check: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
})

module.exports = Cap