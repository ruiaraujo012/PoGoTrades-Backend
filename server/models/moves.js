const Sequelize = require("sequelize");
const db = require("./index").sequelize;
console.log("db :", db);

const Move = db.define(
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
