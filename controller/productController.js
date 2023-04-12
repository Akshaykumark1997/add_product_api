const productModel = require("../model/productSchema");

module.exports = {
  addProduct: (req, res, next) => {
    let images = req.files.map((ele) => ({
      path: ele.path,
      name: ele.filename,
    }));
    let amount = parseInt(req.body.price);
    const MRP = amount + amount * (18 / 100);
    const price =
      MRP -
      MRP * (parseInt(req.body.discount) / 100) +
      parseInt(req.body.shippingCharge);
    productModel
      .create({
        name: req.body.name,
        description: req.body.description,
        MRP,
        discount: req.body.discount,
        shippingCharge: req.body.shippingCharge,
        price,
        images,
      })
      .then((data) => {
        res.json({
            success:true,
            message:"Product added successfully",
        })
      })
      .catch((error) => {
        next(error);
      });
  },
  editProduct: (req, res) => {
     let images = req.files.map((ele) => ({
       path: ele.path,
       name: ele.filename,
     }));
     let amount = parseInt(req.body.price);
     const MRP = amount + amount * (18 / 100);
     const price =
       MRP -
       MRP * (parseInt(req.body.discount) / 100) +
       parseInt(req.body.shippingCharge);
     productModel.updateOne(
       { _id: req.params.id },
       {
         $set: {
           name: req.body.name,
           description: req.body.description,
           MRP,
           discount: req.body.discount,
           shippingCharge: req.body.shippingCharge,
           price,
           images,
         },
       }
     ).then(() => {
        res.json({
            success: true,
            message: "Product edited successfully",
        })
     }).catch((error) => {
        next(error);
     })
  },
  updateProduct: (req, res) => {
    productModel
      .updateOne(
        { _id: req.params.id },
        {
          $set: {
            description: req.validData.description,
          },
        }
      )
      .then(() => {
        res.json({
            success: true,
            message: "Product updated successfully",
        })
      })
      .catch((error) => {
        next(error);
      });
  },
  deleteProduct: (req, res) => {
    productModel
      .deleteOne({ _id: req.params.id })
      .then(() => {
        res.json({
            success: true,
            message: "Product deleted successfully",
        })
      })
      .catch((error) => {
        next(error);
      });
  },
};
