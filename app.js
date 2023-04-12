const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.listen(process.env.PORT || 8000, () => {
    console.log(`server started listening to port ${process.env.PORT || 8000}`);
})