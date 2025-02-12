const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbWorkshop");

const Workshop = sequelize.define(
  "Workshop",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "workshops",
    timestamps: false,
  }
);

module.exports = Workshop;
