const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const User = sequelize.define(
  "Users",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    team: {
      type: Sequelize.ENUM("Instinct", "Mystic", "Valor", "Harmony"),
      allowNull: false,
      defaultValue: "Harmony"
    },
    level: {
      type: Sequelize.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 40
      }
    },
    passwordHash: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },
  {}
);

module.exports = User;
