"use strict";

module.exports = (sequelize, Sequelize) => {
  const Pokemon = sequelize.define("Pokemon", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Pokedex: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    Name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    Alolan: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    Shiny: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    Regional: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    Purified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    Baby: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    CanBeTraded: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Category: {
      type: Sequelize.ENUM("Common", "Legendary", "Mythical"),
      allowNull: false,
      defaultValue: "Common"
    }
  });

  // Pokemon.associate = models => {
  //   models.Pokemon.hasMany(models.PokemonMove, {
  //     foreignKey: {
  //       name: "FastMoveId"
  //       // allowNull: false
  //     }
  //   });

  //   models.Pokemon.hasMany(models.PokemonMove, {
  //     foreignKey: {
  //       name: "ChargeMove1Id"
  //       // allowNull: false
  //     }
  //   });

  //   models.Pokemon.hasMany(models.PokemonMove, {
  //     foreignKey: {
  //       name: "ChargeMove2Id"
  //       // allowNull: false
  //     }
  //   });
  // };

  return Pokemon;
};
