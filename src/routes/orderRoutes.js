const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Ruta para obtener las opciones (datos de usuarios, productos y workshops)
router.get("/options", orderController.getOptions);

// Ruta para crear una nueva orden
router.post("/create", orderController.createOrder);

module.exports = router;
