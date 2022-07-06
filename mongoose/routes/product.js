let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cProduct = require('./../controllers/productController')

// Create === POST
router.post('/', cProduct.create)

// Read (All) === GET
router.get('/', cProduct.index)

// Read (One) === GET
router.get('/:productId', cProduct.show)

// Update (One) === PUT
router.put('/:productId', cProduct.update)

// Delete (One) === DELETE
router.delete('/:productId', cProduct.delete)

router.post('/find', cProduct.find)

module.exports = router;