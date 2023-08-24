const { DataTypes } = require("sequelize");
const sequelize = require("sequelize")
const sqlConfig = require("../conection/sequelizeConetion");
const Cap = require("./chapters");

const Serie = sqlConfig.define(
    "Serie",
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
        modelName: "Serie",
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

Serie.hasMany(Cap, {
    foreignKey: 'serieId',
  });


module.exports = Serie;
