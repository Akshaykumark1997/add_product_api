const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  dbconnect: () => {
    mongoose.connect(
      process.env.URL || "mongodb://localhost:27017/add_product",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    ).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log(`Database connection failed, ${error}`);
    })
  },
};
