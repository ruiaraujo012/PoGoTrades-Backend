const express = require("express");

const router = express.Router();

const Types = require("../controllers/v1/type");

router.get("/types", async (req, res) => {
  try {
    const types = await Types.getAll();

    res.jsonp(types);
  } catch (err) {
    res.status(500).send(`Error: ${err}`);
  }
});

router.post("/types", async (req, res) => {
  try {
    if (req.body instanceof Array) {
      const type = await Types.insertMany(req.body);

      res.status(201).send("Multiple types created successful.");
    } else {
      const type = await Types.insertOne(req.body);

      res
        .status(201)
        .send(`Type "${type.dataValues.Name}" created successful.`);
    }
  } catch (err) {
    // console.log("err :", err);
    if (err.name.search(/Sequelize/i) !== -1)
      res.status(409).send(
        `Error on type creation: ${JSON.stringify({
          name: err.name,
          message: err.message
        })}`
      );
    // console.log("err.name :", err.name);
    // console.log("err.message :", err.message);
    // console.log("err.stack:", err.stack);

    // TODO: Find correct http code
    res.status(500).send(`Error: ${err}`);
  }
});

module.exports = router;
