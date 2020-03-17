const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const Sequelize = require("sequelize");

const indexRouter = require("./routes/index");

const sequelize = require("./configs/database");

const app = express();

/*
 * Database connection
 */

console.log("Trying to connect [POSTGRES]");

try {
  sequelize.authenticate();
  console.log("Connection to [POSTGRES] has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database:", err);
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/", indexRouter);

module.exports = app;
