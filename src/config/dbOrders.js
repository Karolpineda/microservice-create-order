const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.ORDERS_DB_NAME,
  process.env.ORDERS_DB_USER,
  process.env.ORDERS_DB_PASS,
  {
    host: process.env.ORDERS_DB_HOST,
    port: process.env.ORDERS_DB_PORT,
    dialect: "mysql",
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
    console.log("Conexión a la base de datos mySQL establecida con éxito.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();

module.exports = sequelize;
