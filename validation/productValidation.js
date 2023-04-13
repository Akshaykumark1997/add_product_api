const yup = require("yup");

const productSchema = yup.object().shape({
  name: yup
    .string()
    .transform((value) =>
      value !== null ? value.charAt(0).toUpperCase() + value.slice(1) : value
    )
    .trim()
    .required("Name can not be empty"),
  description: yup.string().trim().required("Description can not be empty"),
  discount: yup
    .number()
    .max(100, "Discount cannot be more than 100%")
    .integer("Discount should be valid"),
  shippingCharge: yup
    .number()
    .max(150, "Shipping charge should not be more than 150")
    .positive("Shipping charge should be valid")
    .integer("Shipping charge should be valid"),
  price: yup
    .number()
    .positive("Price should be valid")
    .integer("Price should be valid")
    .required("Price can not be empty"),
});

const productValidation = (req, res, next) => {
  const { name, description, price } = req.body;
  productSchema
    .validate(
      { name, description, price },
      { stripUnknown: true, abortEarly: false }
    )
    .then((data) => {
      req.validData = data;
      next();
    })
    .catch((error) => {
      //   const [validationErr] = error?.errors || ["Something went wrong"];
      res.status(400).json({
        error,
      });
      console.log(error.errors);
    });
};

module.exports = productValidation;
