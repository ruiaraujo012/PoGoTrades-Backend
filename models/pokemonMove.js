"use strict";

module.exports = (sequelize, Sequelize) => {
  const PokemonMove = sequelize.define("PokemonMove", {
    Id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Legacy: {
      type: Sequelize.ENUM("Fast", "Charge1", "Charge2", "Both", "None"),
      allowNull: false,
      defaultValue: "None"
    }
  });

  PokemonMove.associate = models => {
    models.PokemonMove.belongsTo(models.Move, {
      foreignKey: {
        name: "FastMoveId",
        allowNull: false
      }
    });

    models.PokemonMove.belongsTo(models.Move, {
      foreignKey: {
        name: "ChargeMove1Id",
        allowNull: false
      }
    });

    models.PokemonMove.belongsTo(models.Move, {
      foreignKey: {
        name: "ChargeMove2Id",
        allowNull: true
      }
    });

    models.PokemonMove.belongsTo(models.Pokemon, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PokemonMove;
};
