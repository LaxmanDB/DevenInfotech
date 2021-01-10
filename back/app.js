const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
const empRoute = require("./Router/empRout");
connectDB();
app.use(cors());
app.use(express.json());
app.use("/employee", empRoute);
const PORT = 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
