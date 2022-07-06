/**
 * Получить хлеб
 * @param request
 * @param response
 */

// Данные которые я хочу передавать
let bakeryProducts = {
    //bread:{
        name: 'хлеб Горожанин',
        price: 12.5,
        ingredients : [
            { name: 'Мука', value: '1 кг'},
            { name: 'Сахар', value: ' по вкусу '},
            { name: 'Соль'},
        ]
    /**},
    buns:{
        name: 'булочки',
        price: 10,
        ingredients : [
            { name: 'Мука', value: '0.5 кг'},
            { name: 'Сахар', value: ' 3 л.'},
            { name: 'Соль'},
        ]
    },
    pizza:{
        name: 'пицца',
        price: 60,
        ingredients : [
            { name: 'Мука', value: '1 кг'},
            { name: 'Сахар', value: ' по вкусу '},
            { name: 'Соль'},
            { name: 'Сыр'},
            { name: 'Колбаса'},
            { name: 'Кетчуп'}
        ]
    }*/
}

exports.index = function (request, response) {
    return response.status(200).json(bakeryProducts)
}