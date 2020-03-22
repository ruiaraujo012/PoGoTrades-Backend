"use strict";

module.exports = (sequelize, Sequelize) => {
  const Type = sequelize.define("Type", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

  return Type;
};
