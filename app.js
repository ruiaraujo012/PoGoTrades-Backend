const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");

const db = require("./models/index").sequelize;

const usersRouter = require("./routes/v1/users");

const app = express();

const RECREATE_DB = false;

require("./config/passport");

/**
 * Passport initialization
 */
app.use(passport.initialize());

/**
 * Database connection
 */

console.log("Trying to connect to database...");

try {
  db.authenticate();
  console.log("Connection to database has been established successfully.");

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

app.use("/v1/users", usersRouter);

app.use((req, res) => {
  res.status(404).send("Sorry this page does not exist!");
});

module.exports = app;
