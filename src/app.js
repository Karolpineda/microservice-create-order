const express = require("express");
const app = express();
const orderRoutes = require("./routes/orderRoutes");

app.use(cors({
    origin: "*", // O especifica "http://localhost:3000"
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());
app.use("/api/orders", orderRoutes);

module.exports = app;
