const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.PRODUCTS_DB_NAME,
  process.env.PRODUCTS_DB_USER,
  process.env.PRODUCTS_DB_PASS,
  {
    host: process.env.PRODUCTS_DB_HOST,
    port: process.env.PRODUCTS_DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos PostgreSQL 1 establecida con éxito.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

module.exports = sequelize;
