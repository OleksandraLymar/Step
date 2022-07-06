// Подключение модели бд
const Student = require('./../models/students')

/**
 * Создать нового студента
 */
exports.create = function (request, response) {
    // Получили нового студента
    let bodyStudent = request.body
    // Создали запись в бд
    const newStudent = new Student(bodyStudent)
    //Сохранение записи в бд
    newStudent.save(function(err){
        //Если получаем ошибку - вывод тип ошибки
        if(err) {
            console.log(err)
            return response.status(422).json(err)
        }
        //все хорошо - вывод нового студента
        else {
            return response.status(201).json(newStudent);
        }
    });
}

/**
 * Вернуть всех студентов
 */
exports.index = function (request, response) {
    Student.find({}, function(err, allStudents){

        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        else {
            return response.status(200).json(allStudents);
        }
    });
}

/**
 * Вернуть конкретного студента
 */
exports.show = function (request, response) {
    let findId = request.params.studentId
    Student.findById(findId, function(err, allStudents){
        //ошибкa
        if(err) {
            console.log(err);
            return response.status(404).json(err);
        }
        //если все хорошо
        else {
            return response.status(200).json(allStudents);
        }
    });
}

/**
 * Обновить конкретного студента
 */
exports.update = function (request, response) {
    let findId = request.params.studentId
    let upStudent = request.body

    Student.findByIdAndUpdate(findId, upStudent, function (err, newStudent) {
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        //если все ок - обновляем студента
        else {
            console.log('Update Ok')
            return response.sendStatus(204);
        }
    })
    
}

/**
 * Удаление конкретного студента
 */
exports.delete = function (request, response) {
    let findId = request.params.studentId
    console.log('Delete:' + findId)
    Student.findByIdAndDelete(findId, function(err){
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Del Ok')
            return response.sendStatus(200);
        }
    });
}
