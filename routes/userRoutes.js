const express = require("express");
const productValidation = require("../validation/productValidation");
const productController = require("../controller/productController");
const updateProductValidation = require("../validation/updateProductValidation");
const uploadImage = require("../middleware/cloudinary");
const router = express.Router();

router.post(
  "/addProduct",
  uploadImage,
  productValidation,
  productController.addProduct
);
// router.put("/editProduct",uploadImage, productValidation, productController.editProduct);
router.patch(
  "/updateProduct/:id",
  updateProductValidation,
  productController.updateProduct
);

module.exports = router;
