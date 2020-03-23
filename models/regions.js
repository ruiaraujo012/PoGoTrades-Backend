"use strict";

module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define("Region", {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    Generation: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      unique: true
    }
  });

  Region.associate = models => {
    models.Region.hasMany(models.Pokemon, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Region;
};
