const { DataTypes } = require("sequelize");
const sequelize = require("sequelize")
const sqlConfig = require("../conection/sequelizeConetion");
const Cap = require("./chapters");

const serie = sqlConfig.define(
    "serie",
    {
        id: {
            type: DataTypes.INTEGER,
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
                model: "User",
                id: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "serie",
        tableName: "series",
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ["id"],
            },
            {
                fields: ["createdBy"],
            },
        ],
    }
);

serie.hasMany(Cap, {
    foreignKey: 'serieId',
  });


module.exports = serie;
