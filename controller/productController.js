const productModel = require("../model/productSchema");

module.exports = {
  addProduct: (req, res) => {
    console.log(req.body);
    console.log(req.files);
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
    productModel.create({
        name:req.body.name,
        description:req.body.description,
        MRP,
        discount:req.body.discount,
        shippingCharge:req.body.shippingCharge,
        price,
        images,
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
  },
};
