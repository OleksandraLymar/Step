// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: Number
});

module.exports = mongoose.model("products", productSchema);