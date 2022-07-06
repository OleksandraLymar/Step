// Подключиение модуля работы с бд
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

//Настраеваем поля
const tagSchema = new mongoose.Schema({
    name: { type: String, unique: true },
});

module.exports = mongoose.model("tags", tagSchema);