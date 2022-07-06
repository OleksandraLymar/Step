let express = require('express');
let router = express.Router();

// Получение модуля управления
let cStudents = require('./../controllers/studentsController')

// Создание новой записи
// Create === POST
router.post('/', cStudents.create)

// Назначение маршрута на корень метода
// Read (All) === GET
router.get('/', cStudents.index)

// Назначение маршрута с параметром
// Read (One) === GET
router.get('/:studentId', cStudents.show)

// Update (One) === PUT
router.put('/:studentId', cStudents.update)

// Delete (One) === DELETE
router.delete('/:studentId', cStudents.delete)

module.exports = router;