const { DataTypes } = require ("sequelize");
const sqlConfig = require ("../conection/sequelizeConetion")

const User = sqlConfig.define("User", {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(40),
        allowNull: false,
    },
});

module.exports = User