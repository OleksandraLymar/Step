//Подключение модуля работы с бд
const mongoose = require("mongoose");
// Строка соединения с сервером базы данных
//0.0.0.0
const  MONGO_URI  = 'mongodb+srv://sasha:DdtGGW75Z9XdA74w@cluster0.i3pct.mongodb.net/?retryWrites=true&w=majority';

// Стандартная система подключения к базе банных
exports.connect = () => {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};