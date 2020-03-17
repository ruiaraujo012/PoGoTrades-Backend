const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Move = sequelize.define(
  "Moves",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  },
  {}
);

module.exports = Move;
