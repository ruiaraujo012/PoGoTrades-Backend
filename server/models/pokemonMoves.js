const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const PokemonMoves = sequelize.define(
  "PokemonMoves",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pokemonID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    legacy: {
      type: Sequelize.ENUM("Fast", "Charge1", "Charge2", "Both", "None"),
      allowNull: false,
      defaultValue: "None"
    },
    fastMoveID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    chargeMove1ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    chargeMove2ID: {
      type: Sequelize.INTEGER
    }
  },
  {}
);

module.exports = PokemonMoves;
