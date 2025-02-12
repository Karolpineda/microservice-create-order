// src/config/dbWorkshop.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.WORKSHOP_DB_NAME,
  process.env.WORKSHOP_DB_USER,
  process.env.WORKSHOP_DB_PASS,
  {
    host: process.env.WORKSHOP_DB_HOST,
    port: process.env.WORKSHOP_DB_PORT,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
