const express = require("express");
const passport = require("passport");

const { jwtSign } = require("../../utils/jwt");

const router = express.Router();

const Users = require("../../controllers/v1/user");

// Get all users from DB (querystirng to get basic information or all information)
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  async (req, res) => {
    try {
      let users = null;

      if (req.query.format === "basic") users = await Users.getAllBasic();
      // TODO: Remove in the future (maybe for admins only)
      else users = await Users.getAll();

      if (!users || users.length === 0)
        res.status(404).send({ message: "Cannot find users." });
      else res.status(200).jsonp(users);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send({
          message: `Error fetching users: ${JSON.stringify({
            name: err.name,
            message: err.message,
          })}`,
        });
      else res.status(500).send({ message: err });
    }
  }
);

/**
 * Return the profile user data
 */
router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  async (req, res) => {
    try {
      const user = await Users.getId(req.user.id);

      if (!user)
        res
          .status(404)
          .send({ message: `User with id "${req.params.id}" do not exist.` });
      else res.status(200).jsonp(user);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send({
          message: `Error fetching user data: ${JSON.stringify({
            name: err.name,
            message: err.message,
          })}`,
        });
      else res.status(500).send({ message: err });
    }
  }
);

// Get all user information by id (querystirng to get basic information or all information)
router.get(
  "/:id([0-9]+)",
  passport.authenticate("jwt", {
    session: false,
  }),
  async (req, res) => {
    try {
      let user = null;

      if (req.query.format === "basic")
        user = await Users.getIdBasic(req.params.id);
      else user = await Users.getId(req.params.id);

      if (!user)
        res
          .status(404)
          .send({ message: `User with id "${req.params.id}" do not exist.` });
      else res.status(200).jsonp(user);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send({
          message: `Error fetching user data: ${JSON.stringify({
            name: err.name,
            message: err.message,
          })}`,
        });
      else res.status(500).send({ message: err });
    }
  }
);

// Get all user information by username (querystirng to get basic information or all information)
router.get(
  "/:username",
  passport.authenticate("jwt", {
    session: false,
  }),
  async (req, res) => {
    try {
      let user = null;

      if (req.query.format === "basic")
        user = await Users.getUsernameBasic(req.params.username);
      else user = await Users.getUsername(req.params.username);

      if (!user)
        res.status(404).send({
          message: `User with username "${req.params.username}" do not exist.`,
        });
      else res.status(200).jsonp(user);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send({
          message: `Error fetching user data: ${JSON.stringify({
            name: err.name,
            message: err.message,
          })}`,
        });
      else res.status(500).send({ message: err });
    }
  }
);

// Create one user (Only username for now)
router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  async (req, res) => {
    try {
      const user = await Users.insertOne(req.body);

      res.status(201).send({
        message: `User "${user.dataValues.username}" created successful.`,
      });
    } catch (err) {
      // TODO: Refactor this error
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send({
          message: `Error on user creation: ${JSON.stringify({
            name: err.name,
            message: err.message,
          })}`,
        });
      else res.status(500).send({ message: err });
    }
  }
);

// Signup of one user (username and password)
router.post("/signup", async (req, res, next) => {
  passport.authenticate("signup", async (err, user, info) => {
    try {
      if (err) return res.status(500).send({ message: err });

      if (!user) return res.status(409).send(info);

      return res.status(201).send({ message: info });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  })(req, res, next);
});

// Login of one user (username and password)
router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err) return res.status(500).send({ message: err });

      if (!user) return res.status(404).send(info);

      req.login(
        user,
        {
          session: false,
        },
        async err => {
          if (err) return res.status(500).send({ message: err });

          const userInfoInToken = {
            id: user.id,
            username: user.username,
          };

          const token = jwtSign(userInfoInToken, "1h");

          return res.status(201).jsonp({
            message: info,
            token: token,
          });
        }
      );
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  })(req, res, next);
});

module.exports = router;
