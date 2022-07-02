// Получить библиотечную функцию для генерации ID
const lib = require ("../lib/guid")
const generateUUID = lib.generateUUID

// Список студентов - массив объектов
let students = [
    {_id: generateUUID(), name: 'Sasha', age:19},
    {_id: generateUUID(), name: 'Ira', age:19},
    {_id: generateUUID(), name: 'Max', age:18},
    {_id: generateUUID(), name: 'Olha', age:19},
];

/**
 * Создание нового студента
 * Create === POST
 * @param request
 * @param response
 */
exports.create = function (request, response) {
    // Получили нового студента на сервере
    let newStudent = request.body
    newStudent._id = generateUUID()
    //закидываем в массив студентов
    students.push(newStudent)
    //отсылаем в наружу то что создали
    return response.status(201).json(newStudent);
}

/**
 * Возвращает всех студентов из списка
 * Read (All) === GET
 * @param request
 * @param response
 */
exports.index = function (request, response) {
    //получили всех студентов и отправили со статусом 200
    return response.status(200).json(students);
};

/**
 * Вернуть конкретного студента
 * Read (One) === GET
 * @param request
 * @param response
 */
 exports.show = function (request, response) {
     let findId = request.params.studentId
     let findStudent = students.find(s => s._id === findId)
     //отправлено несуществующий номер
     if (!findStudent) {
         //если нет такого студента
         return response.status(404)
     }
     return response.status(200).json(findStudent)
 };

/**
 * Вернуть конкретного студента
 * Update (One) === PUT
 * @param request
 * @param response
 */
 exports.update = function (request, response) {
     let findId = request.params.studentId
     let findStudent = students.findIndex(s => s._id === findId)
     console.log(findStudent)
     //если не найден студент
     if (findStudent === null && typeof (findStudent) === undefined) {
         console.log(' Нет студента ')
         return response.status(404).send()
     }
     //вытягиваем туда студента
     students[findStudent] = request.body
     console.log('Все обновил')
     //возвращаем статус без ответа
     return response.status(204).send()
 }
/**
 * Удалить конкретного студента
 * Delete (One) === DELETE
 * @param request
 * @param response
 */
 exports.delete = function (request, response) {
     let findId = request.params.studentId
     let findStudent = students.findIndex(s => s._id === findId)
     console.log(findStudent)
     if (findStudent === null && typeof (findStudent) === undefined) {
         console.log(' Нет студента ')
         return response.status(404).send()
     }
     students.splice(findStudent,1)
     return response.status(200).send()
 }
