"use strict";

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    Username: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    Team: {
      type: Sequelize.ENUM("Instinct", "Mystic", "Valor", "Harmony"),
      allowNull: false,
      defaultValue: "Harmony"
    },
    Level: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 40
      }
    },
    PasswordHash: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  });

  User.associate = models => {
    models.User.hasMany(models.Trade, {
      foreignKey: {
        name: "Trainer1Id",
        allowNull: true
      }
    });

    models.User.hasMany(models.Trade, {
      foreignKey: {
        name: "Trainer2Id",
        allowNull: true
      }
    });
  };

  return User;
};
