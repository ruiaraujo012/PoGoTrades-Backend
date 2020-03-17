const Sequelize = require("sequelize");

const sequelize = require("../configs/database");

const Region = sequelize.define(
  "Regions",
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
    },
    generation: {
      type: Sequelize.SMALLINT.UNSIGNED,
      allowNull: false
    }
  },
  {}
);

module.exports = Region;
