const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors');
const dotenv = require('dotenv');
const dbconnect = require("./config/connection");
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(cors);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api", userRoutes);

dbconnect.dbconnect();
app.listen(process.env.PORT || 8000, () => {
    console.log(`server started listening to port ${process.env.PORT || 8000}`);
})