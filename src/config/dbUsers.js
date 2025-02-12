// src/config/dbUsers.js
const { Sequelize } = require("sequelize");
require("dotenv").config(); // Cargar las variables de entorno

// Para depurar:
console.log("DB_USER:", process.env.DB_USER);

const sequelize = new Sequelize(
  process.env.DB_NAME, // Debe ser "Users"
  process.env.DB_USER, // Debe ser "admin"
  process.env.DB_PASS, // Debe ser "admin123"
  {
    host: process.env.DB_HOST, // Ej: database-2.c6qizgsui70c.us-east-1.rds.amazonaws.com
    port: process.env.DB_PORT, // Ej: 3306
    dialect: "mariadb",
    dialectModule: require("mariadb"),
    dialectOptions: {
      allowPublicKeyRetrieval: true,
    },
    logging: false,
  }
);
(async () => {
    try {
      await sequelize.authenticate();
      console.log("Conexión a la base de datos MariaDb establecida con éxito.");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  })();
  
  module.exports = sequelize;
  
