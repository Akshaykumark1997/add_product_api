const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors');
const dotenv = require('dotenv');
const dbconnect = require("./config/connection");
const userRoutes = require('./routes/userRoutes');
const errorHandler = require("./error/errorHandler");

dotenv.config();
const app = express();
app.use(cors);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api", userRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, status: 404, message: "Not found" });
});

app.use(errorHandler);

dbconnect.dbconnect();
app.listen(process.env.PORT || 8000, () => {
    console.log(`server started listening to port ${process.env.PORT || 8000}`);
})