const yup = require("yup");

const productSchema = yup.object().shape({
  description: yup.string().trim().required("Description can not be empty"),
});

const updateProductValidation = (req, res, next) => {
  const { description } = req.body;
  productSchema
    .validate(
      { description },
      { stripUnknown: true, abortEarly: false }
    )
    .then((data) => {
      req.validData = data;
      next();
    })
    .catch((error) => {
      //   const [validationErr] = error?.errors || ["Something went wrong"];
      console.log(error.errors);
    });
};
module.exports = updateProductValidation;