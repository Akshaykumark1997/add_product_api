const express = require("express");
const productValidation = require("../validation/productValidation");
const productController = require("../controller/productController");
const router = express.Router();

router.post("/addProduct", productValidation, productController.addProduct);

module.exports = router;
