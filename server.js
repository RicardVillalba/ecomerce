require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const app = express();

connectDB();

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));
