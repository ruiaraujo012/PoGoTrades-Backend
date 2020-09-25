const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const cors = require("cors");

const { NotFound } = require("./http/error");

const db = require("./models/index").sequelize;

const usersRouter = require("./routes/v1/users");

const app = express();

const RECREATE_DB = !!+process.env.DB_RECREATE || false;

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

  console.log("Recreating database: ", RECREATE_DB);
  db.sync({ force: RECREATE_DB });
} catch (err) {
  console.error("Unable to connect to the database:", err);
  process.exit();
}

const corsOpts = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Accept",
    "Authorization",
    "Content-Type",
    "Origin",
    "X-Requested-With",
    "Content-Length",
  ],
};

app.use(cors(corsOpts));
app.options("*", cors(corsOpts));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/users", usersRouter);

app.use((req, res, next) => {
  const error = new NotFound();

  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).jsonp({
    sucess: false,
    error: {
      status: err.status,
      message: err.message,
    },
  });
  next();
});

module.exports = app;
