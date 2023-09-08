const sqlConfig = require("./config.js");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    sqlConfig.database,
    sqlConfig.user,
    sqlConfig.password,
    {
        host: sqlConfig.host,
        dialect:
            'mysql',
    }
);

module.exports = sequelize;
