"use strict";

module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define("Region", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Generation: {
      type: Sequelize.SMALLINT,
      allowNull: false
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
