const { DataTypes } = require("sequelize");
const sequelize = require("sequelize")
const sqlConfig = require("../conection/sequelizeConetion");

const Cap = sqlConfig.define(
    "Cap",
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
        modelName: "Chapter",
        tableName: "chapters",
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
module.exports = Cap;