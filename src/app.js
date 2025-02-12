const express = require("express");
const app = express();
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());
app.use("/api/orders", orderRoutes);

module.exports = app;
