const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Trade = sequelize.define(
  "Trades",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tradeCost: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false
    },
    specialTrade: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    luckyTrade: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    bothRegistered: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    friendshipLevel: {
      type: Sequelize.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 4
      }
    },
    state: {
      type: Sequelize.ENUM("Scheduled", "Done", "Canceled"),
      allowNull: false,
      defaultValue: "Scheduled"
    },
    observation: {
      type: Sequelize.TEXT
    },
    trainer1ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    trainer2ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    pokemon1ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    pokemon2ID: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {}
);

module.exports = Trade;
