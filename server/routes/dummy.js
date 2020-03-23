const express = require("express");

const router = express.Router();

const db = require("../models/index");

/* GET home page. */
router.get("/populateDB", (req, res) => {
  db.Type.create({ Name: "Fire" });
  db.Region.create({ Name: "Johto", Generation: 1 });
  db.Move.create({ Name: "Fast Move Test", TypeId: 1 });
  db.Move.create({ Name: "Charge Move Test", TypeId: 1 });
  db.Pokemon.create({ Pokedex: 1, Name: "Bulbasaur", RegionId: 1, Type1Id: 1 });
  db.User.create({ Username: "MasterPrinter", Team: "Instinct", Level: 40 });
  db.User.create({ Username: "Emap20", Team: "Instinct", Level: 40 });
  db.PokemonMove.create({ FastMoveId: 1, ChargeMove1Id: 2, PokemonId: 1 });
  db.Trade.create({
    TradeCost: 100,
    Trainer1Id: 2,
    Trainer2Id: 1,
    Pokemon1Id: 1,
    Pokemon2Id: 1
  });

  res.jsonp({
    appName: "PoGoTrades"
  });
});

router.get("/getAll", async (req, res) => {
  let response = {};
  try {
    response.users = await db.User.findAll();
    response.trades = await db.Trade.findAll();
    response.pokemons = await db.Pokemon.findAll();
    response.regions = await db.Region.findAll();
    response.types = await db.Type.findAll();
    response.moves = await db.Move.findAll();
    response.pokemonMoves = await db.PokemonMove.findAll();
    // {
    // include: [
    //   {
    //     model: db.Type
    //   }
    // ]
    // });

    res.jsonp({ response });
  } catch (err) {
    console.log("err :", err);
  }
});

module.exports = router;
