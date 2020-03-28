const express = require("express");

const router = express.Router();

const Users = require("../../controllers/v1/user");

// Get all users from DB (querystirng to get basic information or all information)
router.get("/", async (req, res) => {
  if (req.query.format === "basic") {
    try {
      const users = await Users.getAllBasic();

      res.status(200).jsonp(users);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send(
          `Error on user creation: ${JSON.stringify({
            name: err.name,
            message: err.message
          })}`
        );

      res.status(500).send(`Error: ${err}`);
    }
  } else {
    // TODO: Change for admins only
    try {
      const users = await Users.getAll();

      res.status(200).jsonp(users);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send(
          `Error on user creation: ${JSON.stringify({
            name: err.name,
            message: err.message
          })}`
        );

      res.status(500).send(`Error: ${err}`);
    }
  }
});

// Get all user information by id (querystirng to get basic information or all information)
router.get("/:id", async (req, res) => {
  if (req.query.format === "basic") {
    try {
      console.log("req.params :", req.params);
      const users = await Users.getIdBasic(req.params.id);

      res.status(200).jsonp(users);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send(
          `Error on user creation: ${JSON.stringify({
            name: err.name,
            message: err.message
          })}`
        );

      res.status(500).send(`Error: ${err}`);
    }
  } else {
    // TODO: Change else to else if with the user id (Only current user can see all user information)
    try {
      const users = await Users.getId(req.params.id);

      res.status(200).jsonp(users);
    } catch (err) {
      if (err.name.search(/Sequelize/i) !== -1)
        res.status(409).send(
          `Error on user creation: ${JSON.stringify({
            name: err.name,
            message: err.message
          })}`
        );

      res.status(500).send(`Error: ${err}`);
    }
  }
});

// Create one user
router.post("/", async (req, res) => {
  try {
    const user = await Users.insertOne(req.body);

    res
      .status(201)
      .send(`User "${user.dataValues.Username}" created successful.`);
  } catch (err) {
    if (err.name.search(/Sequelize/i) !== -1) {
      res.status(409).send(
        `Error on user creation: ${JSON.stringify({
          name: err.name,
          message: err.message
        })}`
      );
    } else {
      // TODO: Find correct http code
      res.status(500).send(`Error: ${err}`);
    }
  }
});

module.exports = router;
