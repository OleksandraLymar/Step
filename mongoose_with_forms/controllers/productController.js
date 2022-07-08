const productModel = require('./../models/products')

exports.create = function (request, response) {
    let bodyProduct = request.body
    const newProduct = new productModel(bodyProduct)

    newProduct.save(function (err) {
        if (err) {
            console.log(err)
            return response.status(422).json(err)
        } else {
            return response.status(201).json(newProduct)
        }
    });
}

exports.index = function (request, response) {
    productModel.find({}, function(err, allProducts){
        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(allProducts)
        }
    });
}

exports.find = function (request, response) {
    let txtFind = request.body.txtFind
    console.log('Try to find: ' + txtFind)

    // Query for a movie that has the title 'The Room'
    const query = {'Name': {'$regex': txtFind, '$options': 'i'}}
    const options = {};
    productModel.find(query, options, function(err, allProducts){

        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(allProducts)
        }
    });
}

exports.show = function (request, response) {
    let productId = request.params.productId
    productModel.findById(productId, function(err, product){
        if(err) {
            console.log(err);
            return response.status(404).json(err)
        }
        else {
            return response.status(200).json(product)
        }
    });
}

exports.update = function (request, response) {
    let productId = request.params.productId
    let upProduct = request.body
    productModel.findByIdAndUpdate(productId, upProduct, function (err, newProduct) {
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Update - Ok')
            return response.sendStatus(204);
        }
    })

}

exports.delete = function (request, response) {
    let productId = request.params.productId
    console.log('Delete : ' + productId)
    productModel.findByIdAndDelete(productId, function(err){
        if(err) {
            console.log(err);
            return response.status(500).json(err);
        }
        else {
            console.log('Delete - OK')
            return response.sendStatus(200);
        }
    });
}