// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей
const studentSchema = new mongoose.Schema({
    name: { type: String },
    age: Number
});

module.exports = mongoose.model("students", studentSchema);