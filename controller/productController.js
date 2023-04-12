const productModel = require("../model/productSchema");

module.exports = {
  addProduct: (req, res) => {
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
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
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
        console.log("edit completed");
     }).catch((error) => {
        console.log(error);
     })
  },
  updateProduct: (req, res) => {
    console.log(req.validData);
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
        console.log("updated");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteProduct: (req, res) => {
    productModel
      .deleteOne({ _id: req.params.id })
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
