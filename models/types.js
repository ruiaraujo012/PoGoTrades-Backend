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

  Type.associate = models => {
    models.Type.hasMany(models.Pokemon, {
      foreignKey: {
        name: "Type1Id",
        allowNull: false
      }
    });

    models.Type.hasMany(models.Pokemon, {
      foreignKey: {
        name: "Type2Id",
        allowNull: true
      }
    });

    models.Type.hasMany(models.Move, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Type;
};
