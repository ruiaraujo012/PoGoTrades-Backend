"use strict";

module.exports = (sequelize, Sequelize) => {
  const PokemonMove = sequelize.define("PokemonMove", {
    Id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Legacy: {
      type: Sequelize.ENUM("Fast", "Charge1", "Charge2", "Both", "None"),
      allowNull: false,
      defaultValue: "None"
    }
    // fastMoveID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // chargeMove1ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // chargeMove2ID: {
    //   type: Sequelize.INTEGER
    // }
  });

  // PokemonMove.associate = models => {
  // models.PokemonMove.belongsTo(models.Move, {
  //   foreignKey: {
  //     name: "FastMoveId",
  //     allowNull: false
  //   }
  // });
  // models.PokemonMove.belongsTo(models.Move, {
  //   foreignKey: {
  //     name: "ChargeMove1Id",
  //     allowNull: false
  //   }
  // });
  // models.PokemonMove.belongsTo(models.Move, {
  //   foreignKey: {
  //     name: "ChargeMove2Id",
  //     allowNull: false
  //   }
  // });
  // };

  return PokemonMove;
};
