const Order = require("../models/OrderModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const Workshop = require("../models/workshopModel");

// Obtiene los datos de usuarios, productos y workshops para mostrarlos en el front
exports.getOptions = async (req, res) => {
  try {
    const [users, products, workshops] = await Promise.all([
      User.findAll(),
      Product.findAll(),
      Workshop.findAll(),
    ]);

    res.status(200).json({
      users,
      products,
      workshops,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crea una orden validando que los IDs existan en cada base
exports.createOrder = async (req, res) => {
  try {
    const { userId, productId, workshopId } = req.body;

    // Validación de existencia en cada base
    const [user, product, workshop] = await Promise.all([
      User.findByPk(userId),
      Product.findByPk(productId),
      Workshop.findByPk(workshopId),
    ]);

    if (!user || !product || !workshop) {
      return res.status(400).json({ message: "IDs inválidos proporcionados" });
    }

    // Se crea la orden almacenando solo los IDs
    const order = await Order.create({
      user_id: userId,
      product_id: productId,
      workshop_id: workshopId,
    });

    res.status(201).json({
      message: "Orden creada exitosamente",
      order,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
