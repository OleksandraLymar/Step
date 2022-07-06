/**
 * Получение данных о квартире
 * @param request
 * @param response
 */

// Формирование кухни
let kitchen = {
    table: {
        name : 'Стол'
    },
    gaz: {
        burner: [
            {name: 'Малая'},
            {name: 'Средняя'},
            {name: 'Большая'},
        ]
    },
    chair: {
        name: 'Стул',
        size:'small',
        company: 'CH',
    },
    kitchenCabinet: {
        name: 'Тумбочка кухонная',
        size:'middle',
        company: 'CH',
    }
}

// Данные, которые я передаю
let flat = [
    kitchen,
]

exports.index = function (request, response) {
    return response.status(200).json(flat)
}