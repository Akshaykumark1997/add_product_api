const productModel = require('../model/productSchema');

module.exports = {
    addProduct: (req, res) => {
        console.log(req.body);
        console.log(req.files);
    }
}