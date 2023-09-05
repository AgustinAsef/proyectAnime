const { DataTypes } = require("sequelize");
const sequelize = require("sequelize");
const sqlConfig = require("../conection/sequelizeConetion");

const cap = sqlConfig.define(
    "cap",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        isCheck: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
        },
        capNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        serieId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Serie",
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "Caps",
        tableName: "caps",
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ["id"],
            },
            {
                fields: ["serieId"],
            },
        ],
    }
);
module.exports = cap;
