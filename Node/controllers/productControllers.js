let products = [
    {id:1, name:'tv',price:40},
    {id:2, name:'fridge',price:60},
    {id:2, name:'table',price:30},
    {id:2, name:'door',price:20},
    {id:2, name:'window',price:70},
    {id:1, name:'chair',price:10},
    {id:2, name:'bed',price:90},
    {id:2, name:'nightstand',price:45},
];

exports.index = function (request, response){
    return response.status(200).json(products);
};