const express = require("express");

const router = express.Router();

const Move = require("../models/moves");
const Type = require("../models/types");

/* GET home page. */
router.get("/", (req, res) => {
  try {
    Move.create({
      name: "Test"
    });

    Move.create({
      name: "Test2"
    });
  } catch (err) {
    console.log("err :", err);
  }

  res.jsonp({
    appName: "PoGoTrades"
  });
});

router.get("/test", async (req, res) => {
  try {
    const moves = await Move.findAll();

    res.jsonp({
      test: moves
    });
  } catch (err) {
    console.log("err :", err);
  }
});

module.exports = router;
