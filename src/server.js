const app = require("./app");
const ordersDb = require("./config/dbOrders");
const usersDb = require("./config/dbUsers");
const productsDb = require("./config/dbProducts");
const workshopDb = require("./config/dbWorkshop");
const Order = require("./models/OrderModel");
require("dotenv").config();

const PORT = process.env.PORT || 8098;

Promise.all([
  ordersDb.authenticate(),
  usersDb.authenticate(),
  productsDb.authenticate(),
  workshopDb.authenticate()
])
  .then(() => {
    console.log("Conexiones a todas las bases de datos establecidas exitosamente.");
    // Sincroniza la base de datos de órdenes (crea la tabla 'orders' si no existe)
    return ordersDb.sync();
  })
  .then(() => {
    console.log("Tabla 'orders' sincronizada exitosamente.");
    app.listen(PORT, () =>
      console.log(`Servicio de órdenes corriendo en el puerto ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Error al conectar con las bases de datos: ", err);
  });
