let express = require('express');
let router = express.Router();

// Получить модуль управления продуктами
let cTags = require('./../controllers/tagController')

// Create === POST
router.post('/', cTags.create)

// Read (All) === GET
router.get('/', cTags.index)

// Read (One) === GET
router.get('/:tagId', cTags.show)

// Update (One) === PUT
router.put('/:tagId', cTags.update)

// Delete (One) === DELETE
router.delete('/:tagId', cTags.delete)

module.exports = router;