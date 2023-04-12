const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbconnect = require("./config/connection");

dotenv.config();
const app = express();

dbconnect.dbconnect();
app.listen(process.env.PORT || 8000, () => {
    console.log(`server started listening to port ${process.env.PORT || 8000}`);
})