// Методы для прокладки дороги
let express = require('express');
let router = express.Router();

// Ссылка на того - к кому я прокладываю дорогу
let cBakeryProducts = require('../controllers/bakeryProductsController')

// Правила - как отвечать тому, кто пришел
router.get('/', cBakeryProducts.index)

// Подготовится к подключению к общей сети дорог
module.exports = router;