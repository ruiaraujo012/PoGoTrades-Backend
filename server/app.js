const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const Sequelize = require("sequelize");

const indexRouter = require("./routes/index");

const db = require("./configs/database");

const app = express();

const RECREATE_DB = true;

/*
 * Database connection
 */

console.log("Trying to connect [POSTGRES]");

try {
  db.authenticate();
  console.log("Connection to [POSTGRES] has been established successfully.");

  if (RECREATE_DB) {
    console.log("Recreating database!");
    db.sync({ force: true });
  }
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
