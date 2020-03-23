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

  Pokemon.associate = models => {
    models.Pokemon.hasMany(models.Trade, {
      foreignKey: {
        name: "Pokemon1Id",
        allowNull: false
      }
    });

    models.Pokemon.hasMany(models.Trade, {
      foreignKey: {
        name: "Pokemon2Id",
        allowNull: false
      }
    });

    models.Pokemon.belongsTo(models.Region, {
      foreignKey: {
        allowNull: false
      }
    });

    models.Pokemon.belongsTo(models.Type, {
      foreignKey: {
        name: "Type1Id",
        allowNull: false
      }
    });

    models.Pokemon.belongsTo(models.Type, {
      foreignKey: {
        name: "Type2Id",
        allowNull: true
      }
    });

    models.Pokemon.hasMany(models.PokemonMove, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pokemon;
};
