const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Pokemon = sequelize.define(
  "Pokemons",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pokedex: {
      type: Sequelize.SMALLINT.UNSIGNED,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    alolan: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    shiny: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    regional: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    purified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    baby: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    canBeTraded: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    category: {
      type: Sequelize.ENUM("Common", "Legendary", "Mythical"),
      allowNull: false,
      defaultValue: "Common"
    },
    regionID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    type1ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    type2ID: {
      type: Sequelize.INTEGER
    }
  },
  {}
);

module.exports = Pokemon;
