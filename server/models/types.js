const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Type = sequelize.define(
  "Types",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  {}
);

module.exports = Type;
