let express = require('express');
let router = express.Router();

let cProducts = require('./../controllers/productControllers')

router.get('/', cProducts.index);

module.exports = router;