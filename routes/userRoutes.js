const express = require("express");
const productValidation = require("../validation/productValidation");
const productController = require("../controller/productController");
const uploadImage = require('../middleware/cloudinary');
const router = express.Router();

router.post("/addProduct",uploadImage, productValidation, productController.addProduct);

module.exports = router;
